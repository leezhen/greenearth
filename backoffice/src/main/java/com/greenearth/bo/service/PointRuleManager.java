package com.greenearth.bo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.DeductionRuleDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.PointRuleDao;
import com.greenearth.bo.domain.DeductionRule;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.domain.PointRule;

@Service
@Transactional
public class PointRuleManager {
	@Autowired
	private PointRuleDao pointRuleDao;
	
	@Autowired
	private DeductionRuleDao deductionRuleDao;
	
	@Transactional(readOnly = true)
	public Page<PointRule> getPointRules(Page<PointRule> p) {
		return pointRuleDao.getPointRules(p);
	}
	
	@Transactional(readOnly = true)
	public Page<DeductionRule> getDeductionRules(Page<DeductionRule> p) {
		return deductionRuleDao.getDeductionRules(p);
	}
	
	public PointRule findPointRule(InventoryType type) {
		return pointRuleDao.getPointRuleByType(type.getId());
	}
}
