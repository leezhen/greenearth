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
	
	@Autowired
	private InventoryTypeManager inventoryTypeManager;
	
	@Autowired
	private RecycleStationManager recycleStationManager;
	
	@Autowired
	private CustomerManager customerManager;
	
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
			String s = super.getJson();
			JavaType javaType = jsonMapper.constructParametricType(List.class, InventoryLog.class);
			List<InventoryLog> inventoryList = jsonMapper.fromJson(s, javaType);
			if(inventoryList != null) {
				for (InventoryLog log:inventoryList) {
					InventoryType inventoryType = inventoryTypeManager.getType(log.getInventoryTypeId());
					RecycleStation station = recycleStationManager.getRecycleStation(log.getStationId());
					Customer customer = new Customer();
					customer.setId(log.getCustomerId());
	//				Customer customer = customerManager.getCustomer(log.getCustomerId());
					if (inventoryType != null && station != null && customer != null) {
						log.setCreatedAt(new Date());
						log.setCustomer(customer);
						log.setStation(station);
						log.setType(inventoryType);
						inventoryManager.inbound(log);
					}
				}
			}
		} catch (Exception e) {
			log.error("入库操作失败",e);
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
