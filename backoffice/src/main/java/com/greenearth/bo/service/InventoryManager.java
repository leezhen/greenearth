package com.greenearth.bo.service;

import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.InventoryDao;
import com.greenearth.bo.dao.InventoryLogDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Inventory;
import com.greenearth.bo.domain.InventoryLog;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.domain.PointRule;
import com.greenearth.bo.domain.RecycleStation;

@Service
@Transactional
public class InventoryManager {
	private static Logger log = Logger.getLogger(InventoryManager.class);
	
	@Autowired
	private InventoryDao inventoryDao;
	
	@Autowired
	private InventoryLogDao inventoryLogDao;
	
	@Autowired
	private PointRuleManager pointRuleManager;
	
	@Autowired
	private PointsManager pointsManager;

	@Transactional(readOnly = true)
	public List<Inventory> getInventories() {
		return inventoryDao.getInventories();
	}
	
	@Transactional(readOnly = true)
	public Page<Inventory> getInventories(Page<Inventory> p) {
		return inventoryDao.getInventories(p);
	}
	
	@Transactional(readOnly = true)
	public Page<InventoryLog> getInventoryLogs(Page<InventoryLog> p) {
		return inventoryLogDao.getInventoryLogs(p);
	}

	public void saveInventory(Inventory inventory) {
		inventoryDao.saveInventory(inventory);
	}

	public void saveInventoryLog(InventoryLog log) {
		inventoryLogDao.saveInventoryLog(log);
	}
	
	@Transactional(readOnly = true)
	public Inventory getInventory(Integer inventoryId) {
		return inventoryDao.getInventory(inventoryId);
	}
	
	public void inbound(InventoryLog inbound) {
		inbound.setCreatedAt(new Date());
		inventoryLogDao.saveInventoryLog(inbound);
		addInventory(inbound.getType(),inbound.getWeight(),inbound.getStation());
		PointRule pointRule = pointRuleManager.findPointRule(inbound.getType());
		if(pointRule == null) {
			log.error("can't find pointRule for type:" + inbound.getType().getId());
		}
		else {
			Float points = pointRule.getPoints()*inbound.getWeight()/pointRule.getWeight();
			pointsManager.earnPoints(inbound.getCustomer(), points, inbound.getType());
		}
	}
	
	public void addInventory(InventoryType type,Float weight,RecycleStation station) {
		Inventory inventory = getInventoryByTypeAndStation(type,station);
		if(inventory == null) {
			inventory = new Inventory();
			inventory.setStation(station);
			inventory.setWeight(weight);
			inventory.setType(type);
		}
		else {
			inventory.setWeight(inventory.getWeight() + weight);
		}
		inventoryDao.saveInventory(inventory);
	}
	
	public void minusInventory(InventoryType type,Float weight,RecycleStation station) {
		Inventory inventory = getInventoryByTypeAndStation(type,station);
		if(inventory == null) {
			log.error("don't find any inventory by type : " + type.getName() + ", station :" + station.getName());
			throw new RuntimeException("找不到库存类型");
		}
		
		if (inventory.getWeight() < weight) {
			log.error("not enough weight for type:" + type.getName() + ",weight" + weight);
			throw new RuntimeException("库存不足，可售库存: " + inventory.getWeight());
		}
		
		addInventory(type,-weight,station);
	}
	
	@Transactional(readOnly = true)
	public Inventory getInventoryByTypeAndStation(InventoryType type,RecycleStation station) {
		return inventoryDao.getInventoryByStationAndType(type.getId(),station.getId());
	}
}
