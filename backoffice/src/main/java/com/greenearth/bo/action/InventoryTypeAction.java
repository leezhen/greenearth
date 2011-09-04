package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.service.InventoryTypeManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class InventoryTypeAction extends BaseAction {
	
	@Autowired
	private InventoryTypeManager inventoryTypeManager;
	
	public void list() {
		Page<InventoryType> p = new Page<InventoryType>();
		p.setStartAndLimit(start, limit);
		p = inventoryTypeManager.getInventoryTypes(p);
		Struts2Utils.renderJson(p);
	}
}
