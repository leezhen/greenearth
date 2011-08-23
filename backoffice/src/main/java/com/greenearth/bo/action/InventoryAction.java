package com.greenearth.bo.action;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.codehaus.jackson.type.JavaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

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
	
	private static Logger log = Logger.getLogger(InventoryAction.class);
	@Autowired
	private InventoryManager inventoryManager;
	
	@Autowired
	private DistrictManager districtManager;
	
	private Integer customerId;
	
	private Integer inventoryTypeId ;
	
	private Float weight;
	
	private Integer id;
	
	public void setInventoryManager(InventoryManager inventoryManager) {
		this.inventoryManager = inventoryManager;
	}

	public InventoryManager getInventoryManager() {
		return inventoryManager;
	}
	
	public void query()
	{
		Page<Inventory> p = new Page<Inventory>();
		p.setStartAndLimit(start, limit);
		p = inventoryManager.getInventories(p);
		Struts2Utils.renderJson(p);
	}
	
	public void listInventoryLog() {
		Page<InventoryLog> p = new Page<InventoryLog>();
		p.setStartAndLimit(start, limit);
		p = inventoryManager.getInventoryLogs(p);
		Struts2Utils.renderJson(p);
	}
	
	public void sortInbound() {
		try {
			
			List<InventoryLog> inventoryList = new ArrayList<InventoryLog>();
			String s = super.getJson();
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
			log.error("入库操作失败",e);
			Struts2Utils.renderJson("{success: false, msg: '入库失败'}");
		}
	}
	
	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setInventoryTypeId(Integer inventoryTypeId) {
		this.inventoryTypeId = inventoryTypeId;
	}

	public Integer getInventoryTypeId() {
		return inventoryTypeId;
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
}
