package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.InventoryType;

public interface InventoryTypeDao {
	List<InventoryType> getInventoryTypes();
	InventoryType getInventoryType(Integer id);
	Page<InventoryType> getInventoryTypes(Page<InventoryType> p);
}
