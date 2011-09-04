package com.greenearth.bo.action;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.City;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.domain.District;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.service.InventoryTypeManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class InventoryTypeAction extends BaseAction {
	
	@Autowired
	private InventoryTypeManager inventoryTypeManager;
	
	private Integer id;
	private String name;
	private String desc;
	
	public void list() {
		Page<InventoryType> p = new Page<InventoryType>();
		p.setStartAndLimit(start, limit);
		p = inventoryTypeManager.getInventoryTypes(p);
		Struts2Utils.renderJson(p);
	}
	
	public void save() {
		try {
			boolean isNew = (id == null ? true : false);
			InventoryType t = null;
			if (isNew) {
				t = new InventoryType();
			} else {
				t = inventoryTypeManager.getType(id);
			}
			t.setName(name);
			t.setDesc(desc);
			inventoryTypeManager.save(t);
			Struts2Utils.renderJson("{success: true, msg: '" + (isNew ? "添加" : "修改") + "成功'}");
		} catch(Exception e) {
			logger.error("保存库存类型失败",e);
			Struts2Utils.renderJson("{success: true, msg: '操作失败'}");
		}
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
}
