package com.greenearth.bo.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Example;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.PointRuleDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.PointRule;

@Repository
public class PointRuleDaoImpl extends HibernateDao<PointRule, Integer> implements PointRuleDao {
	@Override
	public List<PointRule> getPointRules() {
		return this.getAll();
	}

	@Override
	public Page<PointRule> getPointRules(Page<PointRule> p) {
		// TODO Auto-generated method stub
		return this.findPage(p, "from PointRule");
	}

	@Override
	public PointRule getPointRuleByType(Integer typeId) {
		return findUniqueBy(PointRule._InventoryTypeId, typeId);
	}
	
	
}
