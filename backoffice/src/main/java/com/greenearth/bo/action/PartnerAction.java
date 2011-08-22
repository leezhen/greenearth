package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Partner;
import com.greenearth.bo.service.PartnerManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class PartnerAction extends BaseAction {
	
	@Autowired
	private PartnerManager partnerManager;
	
	public void list() {
		Page<Partner> p = new Page<Partner>();
		p.setStartAndLimit(start, limit);
		p = partnerManager.getPartners(p);
		Struts2Utils.renderJson(p);
	}
}
