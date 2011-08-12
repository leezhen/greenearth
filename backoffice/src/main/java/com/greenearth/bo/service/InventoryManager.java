package com.greenearth.bo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.InventoryDao;
import com.greenearth.bo.dao.InventoryLogDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.domain.Inventory;
import com.greenearth.bo.domain.InventoryLog;

@Service
@Transactional
public class InventoryManager {
	@Autowired
	private InventoryDao inventoryDao;
	
	@Autowired
	private InventoryLogDao inventoryLogDao;

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
		return inventoryDao.get(inventoryId);
	}
}
