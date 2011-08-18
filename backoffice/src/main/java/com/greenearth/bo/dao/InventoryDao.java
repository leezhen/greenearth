package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.Inventory;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.domain.RecycleStation;

public interface InventoryDao {
	List<Inventory> getInventories();
	void saveInventory(Inventory inventory);
	Page<Inventory> getInventories(Page<Inventory> p);
	Inventory getInventory(Integer id);
	Inventory getInventoryByStationAndType(Integer typeId,Integer stationId);
}
 