package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.DeductionRule;

public interface DeductionRuleDao {
	
	public List<DeductionRule> getDeductionRules();
	public Page<DeductionRule> getDeductionRules(Page<DeductionRule> p);
	public DeductionRule findDeductionByReason(Integer reasonId);
}
