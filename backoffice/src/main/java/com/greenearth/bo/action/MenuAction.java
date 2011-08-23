package com.greenearth.bo.action;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.Constants;
import com.greenearth.bo.service.MenuManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class MenuAction extends BaseAction {
	@Autowired
	private MenuManager menuManager;
	
	public void list() {
		Subject currentUser = SecurityUtils.getSubject();
		if (currentUser.hasRole(Constants.ROLE_ADMIN)) {
			Struts2Utils.renderJson(menuManager.getRootMenus());
		} else {
			Struts2Utils.renderJson(menuManager.getRootMenus((Long) currentUser.getPrincipal()));
		}
	}
}
