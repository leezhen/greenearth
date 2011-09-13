package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Activity;
import com.greenearth.bo.domain.Merchant;
import com.greenearth.bo.service.ActivityManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class ActivityAction extends BaseAction {
	
	@Autowired
	private ActivityManager activityManager;
	
	public void list() {
		try {
			Page<Activity> p = new Page<Activity>();
			p.setStartAndLimit(start, limit);
			p = activityManager.getActivities(p, params);
			Struts2Utils.renderJson(p);
		} catch (Exception e) {
			logger.error("query inventory error:",e);
			Struts2Utils.renderJson("{success: false, msg: '查询失败'}");
		}
	}
}
