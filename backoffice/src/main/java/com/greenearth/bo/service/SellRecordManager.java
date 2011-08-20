package com.greenearth.bo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.SellRecordDao;
import com.greenearth.bo.domain.SellRecord;

@Service
@Transactional
public class SellRecordManager {
	
	@Autowired
	private SellRecordDao sellRecordDao;
	
	@Autowired
	private InventoryManager inventoryManager;
	
	@Transactional(readOnly = true)
	public Page<SellRecord> getSellRecords(Page<SellRecord> p) {
		return sellRecordDao.getSellRecords(p);
	}
	
	public void save(SellRecord sr) {
		sellRecordDao.save(sr);
	}
	
	public void sell(SellRecord sr) {
		save(sr);
		inventoryManager.minusInventory(sr.getInventoryType(), sr.getWeight() , sr.getStation());
	}
}
