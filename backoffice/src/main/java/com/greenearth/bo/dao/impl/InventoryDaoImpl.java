package com.greenearth.bo.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Example;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.InventoryDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.Inventory;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.domain.RecycleStation;

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
	public Inventory getInventoryByStationAndType(Integer typeId,Integer stationId) {
		Criteria cr = createCriteria();
		cr.add(Restrictions.eq(Inventory._TypeId, typeId));
		cr.add(Restrictions.eq(Inventory._StationId, stationId));
		return (Inventory) cr.uniqueResult();
	}

	@Override
	public Inventory getInventory(Integer id) {
		// TODO Auto-generated method stub
		return get(id);
	}
}
