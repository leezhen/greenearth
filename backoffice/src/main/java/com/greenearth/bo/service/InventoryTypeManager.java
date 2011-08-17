package com.greenearth.bo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.InventoryTypeDao;
import com.greenearth.bo.domain.InventoryType;

@Service
@Transactional
public class InventoryTypeManager {
	
	@Autowired
	private InventoryTypeDao inventoryTypeDao;
	
	@Transactional(readOnly = true)
	public InventoryType getType(Integer id) {
		return inventoryTypeDao.getInventoryType(id);
	}
}
