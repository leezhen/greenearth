package com.greenearth.bo.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.service.DictionaryManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class DictionaryAction extends BaseAction {
	@Autowired
	private DictionaryManager dictManager;
	
	public void inventoryTypes() {
		List<InventoryType> invTypes = dictManager.getInventoryTypes();
		Struts2Utils.renderJson(invTypes);
	}
}
