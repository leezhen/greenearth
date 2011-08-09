package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.DeductionRuleDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.DeductionRule;

@Repository
public class DeductionRuleDaoImpl extends HibernateDao<DeductionRule,Integer> implements DeductionRuleDao {

	@Override
	public List<DeductionRule> getPointRules() {
		return getAll();
	}

}
