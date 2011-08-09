package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.PointRuleDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.PointRule;

@Repository
public class PointRuleDaoImpl extends HibernateDao<PointRule, Integer> implements PointRuleDao {
	@Override
	public List<PointRule> getPointRules() {
		return this.getAll();
	}
}
