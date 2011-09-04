package com.greenearth.bo.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.domain.DeductionReason;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.domain.Partner;
import com.greenearth.bo.domain.PointsType;
import com.greenearth.bo.domain.Province;
import com.greenearth.bo.domain.RecycleStation;
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
	
	public void recycleStations() {
		List<RecycleStation> stations = dictManager.getRecycleStations();
		Struts2Utils.renderJson(stations);
	}
	
	public void partners() {
		List<Partner> partners = dictManager.getPartners();
		Struts2Utils.renderJson(partners);
	}
	
	public void reasons() {
		List<DeductionReason> reasons = dictManager.getReasons();
		Struts2Utils.renderJson(reasons);
	}
	
	public void provinces() {
		List<Province> provinces = dictManager.getProvinces();
		Struts2Utils.renderJson(provinces);
	}
	
	public void pointTypes() {
		List<PointsType> pointTypes = dictManager.getPointsTypes();
		Struts2Utils.renderJson(pointTypes);
	}
}
