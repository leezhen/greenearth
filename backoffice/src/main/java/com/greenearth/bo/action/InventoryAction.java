package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.domain.Inventory;
import com.greenearth.bo.domain.InventoryLog;
import com.greenearth.bo.service.DistrictManager;
import com.greenearth.bo.service.InventoryManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class InventoryAction extends BaseAction {
	
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
