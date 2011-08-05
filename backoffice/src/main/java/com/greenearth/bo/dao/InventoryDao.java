package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.Inventory;

public interface InventoryDao {
	List<Inventory> getInventories();
	void saveInventory(Inventory inventory);
	Page<Inventory> getInventories(Page<Inventory> p);
}
