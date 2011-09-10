package com.greenearth.bo.dao.impl;

import java.util.List;

import org.hibernate.criterion.Restrictions;
import org.hibernate.criterion.SimpleExpression;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.InventoryTypeDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.InventoryType;

@Repository
public class InventoryTypeDaoImpl extends HibernateDao<InventoryType, Integer> implements InventoryTypeDao {

	@Override
	public List<InventoryType> getInventoryTypes(Integer level) {
		return this.findBy(InventoryType._Level, level);
	}
	
	@Override
	public InventoryType getInventoryType(Integer id) {
		return get(id);
	}

	@Override
	public Page<InventoryType> getInventoryTypes(Page<InventoryType> p) {
		// TODO Auto-generated method stub
		return this.findPage(p, "from InventoryType");
	}
}
