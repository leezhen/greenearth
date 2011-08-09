package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.RecycleStation;
import com.greenearth.bo.service.RecycleStationManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class RecycleStationAction extends BaseAction {
	
	@Autowired
	RecycleStationManager recycleStationManager;
	
	public void query() {
		Page<RecycleStation> p = new Page<RecycleStation>();
		p.setStartAndLimit(start, limit);
		p = recycleStationManager.getRecycleStations(p);
		Struts2Utils.renderJson(p);
	}
}
