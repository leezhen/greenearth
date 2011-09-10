package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.InventoryType;

public interface InventoryTypeDao {
	List<InventoryType> getInventoryTypes(Integer level);
	InventoryType getInventoryType(Integer id);
	Page<InventoryType> getInventoryTypes(Page<InventoryType> p);
	void save(InventoryType type);
}
