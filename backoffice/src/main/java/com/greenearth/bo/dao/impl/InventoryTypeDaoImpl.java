package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.InventoryTypeDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.InventoryType;

@Repository
public class InventoryTypeDaoImpl extends HibernateDao<InventoryType, Integer> implements InventoryTypeDao {

	@Override
	public List<InventoryType> getInventoryTypes() {
		return getAll();
	}

}
