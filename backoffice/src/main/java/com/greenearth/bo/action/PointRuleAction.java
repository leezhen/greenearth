package com.greenearth.bo.action;

import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.DeductionReason;
import com.greenearth.bo.domain.DeductionRule;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.domain.PointRule;
import com.greenearth.bo.service.DictionaryManager;
import com.greenearth.bo.service.InventoryTypeManager;
import com.greenearth.bo.service.PointRuleManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class PointRuleAction extends BaseAction {
	private Logger log = Logger.getLogger(PointRuleAction.class);
	
	@Autowired
	private PointRuleManager pointRuleManager;
	
	@Autowired
	private InventoryTypeManager inventoryTypeManager;
	
	private Float points;
	private Float weight;
	private InventoryType inventoryType;
	private Integer id;
	private DeductionReason deductionReason;
	
	
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
	
	public void savePointRules() {
		try {
			boolean isNew = (id == null ? true : false);
			PointRule rule = null ;
			if (isNew) {
				rule = new PointRule();
				rule.setCreatedAt(new Date());
				rule.setCreatedBy("System");
			} else {
				rule = pointRuleManager.getPointRule(id);
				rule.setModifiedAt(new Date());
				rule.setModifiedBy("System");
			}
			rule.setPoints(points);
			rule.setWeight(weight);
			rule.setInventoryType(inventoryType);
			pointRuleManager.savePointRule(rule);
			Struts2Utils.renderJson("{success: true, msg: '" + (isNew ? "添加" : "修改") + "成功'}");
		} catch (Exception e) {
			log.error("save point rule failed:" ,e);
			Struts2Utils.renderJson("{success: true, msg: '操作失败'}");
		}
	}
	
	public void saveDeductionRules() {
		try {
			boolean isNew = (id == null ? true : false);
			DeductionRule rule = null ;
			if (isNew) {
				rule = new DeductionRule();
				rule.setCreatedAt(new Date());
				rule.setCreatedBy("System");
			} else {
				rule = pointRuleManager.getDeductionRule(id);
				rule.setModifiedAt(new Date());
				rule.setModifiedBy("System");
			}
			rule.setPoints(points);
			rule.setDeductionReason(deductionReason);
			pointRuleManager.saveDeductionRule(rule);
			Struts2Utils.renderJson("{success: true, msg: '" + (isNew ? "添加" : "修改") + "成功'}");
		} catch (Exception e) {
			log.error("save point rule failed:" ,e);
			Struts2Utils.renderJson("{success: true, msg: '操作失败'}");
		}
	}

	public PointRuleManager getPointRuleManager() {
		return pointRuleManager;
	}

	public void setPointRuleManager(PointRuleManager pointRuleManager) {
		this.pointRuleManager = pointRuleManager;
	}

	public Float getPoints() {
		return points;
	}

	public void setPoints(Float points) {
		this.points = points;
	}

	public Float getWeight() {
		return weight;
	}

	public void setWeight(Float weight) {
		this.weight = weight;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public InventoryType getInventoryType() {
		return inventoryType;
	}

	public void setInventoryType(InventoryType inventoryType) {
		this.inventoryType = inventoryType;
	}

	public DeductionReason getDeductionReason() {
		return deductionReason;
	}

	public void setDeductionReason(DeductionReason deductionReason) {
		this.deductionReason = deductionReason;
	}
	
}
