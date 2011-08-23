package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.DeductionRuleDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.DeductionRule;

@Repository
public class DeductionRuleDaoImpl extends HibernateDao<DeductionRule,Integer> implements DeductionRuleDao {

	@Override
	public List<DeductionRule> getDeductionRules() {
		return getAll();
	}

	@Override
	public Page<DeductionRule> getDeductionRules(Page<DeductionRule> p) {
		// TODO Auto-generated method stub
		return this.findPage(p, "from DeductionRule");
	}

	@Override
	public DeductionRule findDeductionByReason(Integer reasonId) {
		return this.findUniqueBy(DeductionRule._ReasonId, reasonId);
	}

}
