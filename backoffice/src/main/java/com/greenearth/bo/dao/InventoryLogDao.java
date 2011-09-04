package com.greenearth.bo.dao;

import java.util.Map;

import com.greenearth.bo.domain.InventoryLog;

public interface InventoryLogDao {
	void saveInventoryLog(InventoryLog log);
	public Page<InventoryLog> getInventoryLogs(Page<InventoryLog> p,Map<String,Object> params);
}
