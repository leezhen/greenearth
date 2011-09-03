package com.greenearth.bo.action;

import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.codehaus.jackson.type.JavaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.google.common.io.CharStreams;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.domain.Inventory;
import com.greenearth.bo.domain.InventoryLog;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.domain.RecycleStation;
import com.greenearth.bo.mapper.JsonMapper;
import com.greenearth.bo.service.CustomerManager;
import com.greenearth.bo.service.DistrictManager;
import com.greenearth.bo.service.InventoryManager;
import com.greenearth.bo.service.InventoryTypeManager;
import com.greenearth.bo.service.RecycleStationManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class InventoryAction extends BaseAction {
	@Autowired
	private InventoryManager inventoryManager;
	
	@Autowired
	private CustomerManager customerManager;
	
	private Integer customerId;
	
	private Float weight;
	
	private Integer id;
	
	protected JsonMapper jsonMapper = JsonMapper.buildNormalMapper();
	
	public void query()
	{
		try {
			Page<Inventory> p = new Page<Inventory>();
			p.setStartAndLimit(start, limit);
			p = inventoryManager.getInventories(p,params);
			Struts2Utils.renderJson(p);
		} catch(Exception e) {
			logger.error("query inventory error:",e);
			Struts2Utils.renderJson("{success: false, msg: '查询失败'}");
		}
	}
	
	public void listInventoryLog() {
		try {
			Page<InventoryLog> p = new Page<InventoryLog>();
			p.setStartAndLimit(start, limit);
			p = inventoryManager.getInventoryLogs(p);
			Struts2Utils.renderJson(p);
		} catch(Exception e) {
			logger.error("query inventoryLog error:",e);
			Struts2Utils.renderJson("{success: false, msg: '查询失败'}");
		}
	}
	
	public void sortInbound() {
		try {
			
			List<InventoryLog> inventoryList = new ArrayList<InventoryLog>();
			String s = this.getJson();
			//List
			if(s.startsWith("[")) {
				JavaType javaType = jsonMapper.constructParametricType(List.class, InventoryLog.class);
				inventoryList = jsonMapper.fromJson(s, javaType);
			}
			//Single
			else {
				InventoryLog inventoryLog = jsonMapper.fromJson(s, InventoryLog.class);
				if(inventoryLog == null)
					inventoryList = null;
				else
					inventoryList.add(inventoryLog);
			}
			
			if(inventoryList != null) {
				for (InventoryLog log:inventoryList) {
					Customer customer  = customerManager.findCustomerByCellPhone(log.getCellPhone());
					if(customer == null) {
						logger.error("can't find customer by phone:" + log.getCellPhone());
						Struts2Utils.renderJson("{success: false, msg: '手机号录入错误'}");
						return;
					}
					log.setCustomer(customer);
					inventoryManager.inbound(log);
				}
			}
			else {
				logger.error("jackson convertot exception");
				Struts2Utils.renderJson("{success: false, msg: '入库失败'}");
				return;
			}
			Struts2Utils.renderJson("{success: true, msg: '入库成功'}");
		} catch (Exception e) {
			logger.error("入库操作失败",e);
			Struts2Utils.renderJson("{success: false, msg: '入库失败'}");
		}
	}
	
	protected String getJson() {
		String str = null;
		try {
			str = CharStreams.toString(new InputStreamReader(request.getInputStream(), "UTF-8"));
		} catch (IOException e) {
			logger.warn("Error occured converting InputStream to String: ", e);
		}
		
		return str;
	}
	
	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setInventoryTypeId(Integer inventoryTypeId) {
		params.put(Inventory._TypeId, inventoryTypeId);
	}

	public Integer getInventoryTypeId() {
		return (Integer) params.get(Inventory._TypeId);
	}

	public void setWeight(Float weight) {
		this.weight = weight;
	}

	public Float getWeight() {
		return weight;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getId() {
		return id;
	}

	public Integer getStationId() {
		return (Integer) params.get(Inventory._StationId);
	}

	public void setStationId(Integer stationId) {
		params.put(Inventory._StationId, stationId);
	}
}
