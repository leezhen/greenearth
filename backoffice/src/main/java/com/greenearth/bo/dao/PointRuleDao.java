package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.PointRule;

public interface PointRuleDao {
	public List<PointRule> getPointRules();
	public Page<PointRule> getPointRules(Page<PointRule> p);
	public PointRule getPointRuleByType(Integer typeId);
}
