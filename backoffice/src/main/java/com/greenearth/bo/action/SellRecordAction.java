package com.greenearth.bo.action;

import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.SellRecord;
import com.greenearth.bo.service.InventoryManager;
import com.greenearth.bo.service.InventoryTypeManager;
import com.greenearth.bo.service.PartnerManager;
import com.greenearth.bo.service.RecycleStationManager;
import com.greenearth.bo.service.SellRecordManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class SellRecordAction extends BaseAction{
	@Autowired
	private SellRecordManager sellRecordManger;
	
	@Autowired
	private InventoryTypeManager inventoryTypeManger;
	
	@Autowired
	private PartnerManager partnerManager;
	
	@Autowired
	private RecycleStationManager recycleStationManger;
	
	private Integer id;
	private Integer recycleStationId;
	private Integer partnerId;
	private Integer inventoryTypeId;
	private Float weight;
	private Float price;
	private Float totalAmount;
	
	public void list() {
		Page<SellRecord> p = new Page<SellRecord>();
		p.setStartAndLimit(start, limit);
		p = sellRecordManger.getSellRecords(p);
		Struts2Utils.renderJson(p);
	}
	
	public void save() {
		try {
		boolean isNew = (id == null ? true : false);
		SellRecord sr  = null;
		if (isNew) {
			sr = new SellRecord();
			sr.setCreatedAt(new Date());
		}
		sr.setInventoryType(inventoryTypeManger.getType(inventoryTypeId));
		sr.setPartner(partnerManager.getPartner(partnerId));
		sr.setStation(recycleStationManger.getRecycleStation(recycleStationId));
		sr.setPrice(price);
		sr.setWeight(weight);
		sr.setTotalAmount(totalAmount);
		sellRecordManger.sell(sr);
		Struts2Utils.renderJson("{success: true, msg: '" + (isNew ? "添加" : "修改") + "成功'}");
		} catch (Exception e) {
			logger.error("出库操作失败",e);
			Struts2Utils.renderJson("{success: false, msg: '" + e.getMessage() + "'}");
		}
	}

	public SellRecordManager getSellRecordManger() {
		return sellRecordManger;
	}

	public void setSellRecordManger(SellRecordManager sellRecordManger) {
		this.sellRecordManger = sellRecordManger;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getRecycleStationId() {
		return recycleStationId;
	}

	public void setRecycleStationId(Integer recycleStationId) {
		this.recycleStationId = recycleStationId;
	}

	public Integer getPartnerId() {
		return partnerId;
	}

	public void setPartnerId(Integer partnerId) {
		this.partnerId = partnerId;
	}

	public Integer getInventoryTypeId() {
		return inventoryTypeId;
	}

	public void setInventoryTypeId(Integer inventoryTypeId) {
		this.inventoryTypeId = inventoryTypeId;
	}
	
	public Float getWeight() {
		return weight;
	}

	public void setWeight(Float weight) {
		this.weight = weight;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public Float getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(Float totalAmount) {
		this.totalAmount = totalAmount;
	}
	
}
