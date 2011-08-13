package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.service.MenuManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class MenuAction extends BaseAction {
	@Autowired
	private MenuManager menuManager;
	
	public void list() {
		Struts2Utils.renderJson(menuManager.getRootMenus());
	}
}
