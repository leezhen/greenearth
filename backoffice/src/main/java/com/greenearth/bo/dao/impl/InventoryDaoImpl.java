package com.greenearth.bo.dao.impl;

import java.util.List;

import org.hibernate.criterion.Example;
import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.InventoryDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.Inventory;

@Repository
public class InventoryDaoImpl extends HibernateDao<Inventory, Integer> implements InventoryDao {

	@Override
	public List<Inventory> getInventories() {
		return getAll();
	}

	@Override
	public void saveInventory(Inventory inventory) {
		save(inventory);
	}

	@Override
	public Page<Inventory> getInventories(Page<Inventory> p) {
		return findPage(p,"from Inventory");
	}

	@Override
	public List<Inventory> getInventories(Inventory queryEntiy) {
		Example example = Example.create(queryEntiy);
		return super.find(example);
	}

	@Override
	public Inventory getInventory(Integer id) {
		// TODO Auto-generated method stub
		return get(id);
	}
}
