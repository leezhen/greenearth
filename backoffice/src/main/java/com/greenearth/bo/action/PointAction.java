package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.domain.PointsDeducted;
import com.greenearth.bo.domain.PointsEarned;
import com.greenearth.bo.service.PointsManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class PointAction extends BaseAction {
	
	@Autowired
	private PointsManager pointsManager;
	
	private Long customerId;
	
	public void listEarnedPoints() {
		Page<PointsEarned> p = new Page<PointsEarned>();
		p.setStartAndLimit(start, limit);
		p = pointsManager.getPointsEarned(p,customerId);
		Struts2Utils.renderJson(p);
	}
	
	public void listDeductionPoints() {
		Page<PointsDeducted> p = new Page<PointsDeducted>();
		p.setStartAndLimit(start, limit);
		p = pointsManager.getPointsDeducted(p);
		Struts2Utils.renderJson(p);
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public Long getCustomerId() {
		return customerId;
	}
}
