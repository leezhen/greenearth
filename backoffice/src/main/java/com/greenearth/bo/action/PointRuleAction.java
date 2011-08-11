package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.DeductionRule;
import com.greenearth.bo.domain.PointRule;
import com.greenearth.bo.service.PointRuleManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class PointRuleAction extends BaseAction {
	
	@Autowired
	private PointRuleManager pointRuleManager;
	
	public void listPointRules() {
		Page<PointRule> p = new Page<PointRule>();
		p.setStartAndLimit(start, limit);
		p = pointRuleManager.getPointRules(p);
		Struts2Utils.renderJson(p);
	}
	
	public void listDeductionRules() {
		Page<DeductionRule> p = new Page<DeductionRule>();
		p.setStartAndLimit(start, limit);
		p = pointRuleManager.getDeductionRules(p);
		Struts2Utils.renderJson(p);
	}
}
