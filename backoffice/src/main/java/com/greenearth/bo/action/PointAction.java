package com.greenearth.bo.action;

import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.type.JavaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.domain.CustomerPoint;
import com.greenearth.bo.domain.InventoryLog;
import com.greenearth.bo.domain.PointsDeducted;
import com.greenearth.bo.domain.PointsEarned;
import com.greenearth.bo.expand.PointRef;
import com.greenearth.bo.mapper.JsonMapper;
import com.greenearth.bo.service.CustomerManager;
import com.greenearth.bo.service.PointsManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class PointAction extends BaseAction {
	@Autowired
	private PointsManager pointsManager;
	
	@Autowired
	private CustomerManager customerManager;
	
	private Long customerId;
	
	protected JsonMapper jsonMapper = JsonMapper.buildNormalMapper();
	
	public void listEarnedPoints() {
		Page<PointsEarned> p = new Page<PointsEarned>();
		p.setStartAndLimit(start, limit);
		p = pointsManager.getPointsEarned(p,customerId);
		Struts2Utils.renderJson(p);
	}
	
	public void listDeductionPoints() {
		Page<PointsDeducted> p = new Page<PointsDeducted>();
		p.setStartAndLimit(start, limit);
		p = pointsManager.getPointsDeducted(p,customerId);
		Struts2Utils.renderJson(p);
	}
	
	public void listTotal() {
		Page<CustomerPoint> p = new Page<CustomerPoint>();
		p.setStartAndLimit(start, limit);
		p = pointsManager.getCustomerPoints(p,customerId);
		Struts2Utils.renderJson(p);
	}
	
	public void calculatePoint() {
		String json = this.getJson();
		if (json != null) { 
			try {
				List<PointRef> pointRefList = new ArrayList<PointRef>();
				if (json.startsWith("[")) { //List
					JavaType javaType = jsonMapper.constructParametricType(List.class, PointRef.class);
					pointRefList = jsonMapper.fromJson(json, javaType);
				} else { //Single
					PointRef pointRef = jsonMapper.fromJson(json, PointRef.class);
					if (pointRef == null) 
						pointRefList = null;
					else
						pointRefList.add(pointRef);
				}
				
				if (pointRefList != null) {
					for (PointRef ref : pointRefList) {
						Customer customer  = customerManager.findCustomerByBarCode(ref.getBarCode());
						if(customer == null) {
							logger.error("can't find customer by barcode:" + ref.getBarCode());
							Struts2Utils.renderJson("{success: false, msg: '找不到条形码对应的顾客'}");
							return;
						}
						pointsManager.caculatePoint(ref,customer);
					}
				} else {
					logger.error("jackson convertot exception");
					Struts2Utils.renderJson("{success: false, msg: '积分操作失败'}");
					return;
				}
				Struts2Utils.renderJson("{success: true, msg: '分拣积分成功'}");
			} catch (Exception e) {
				logger.error("分拣积分操作失败",e);
				Struts2Utils.renderJson("{success: false, msg: '分拣积分操作失败'}");
			}
		}
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public Long getCustomerId() {
		return customerId;
	}
}
