package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.domain.Inventory;
import com.greenearth.bo.service.InventoryManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class InventoryAction extends BaseAction {
	
	@Autowired
	private InventoryManager inventoryManager;
	
	public void setInventoryManager(InventoryManager inventoryManager) {
		this.inventoryManager = inventoryManager;
	}

	public InventoryManager getInventoryManager() {
		return inventoryManager;
	}

	public void query()
	{
		Page<Inventory> p = new Page<Inventory>();
		p.setStartAndLimit(start, limit);
		p = inventoryManager.getInventories(p);
		Struts2Utils.renderJson(p);
	}
}
