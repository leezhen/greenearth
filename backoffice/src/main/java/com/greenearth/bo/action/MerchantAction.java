package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Merchant;
import com.greenearth.bo.service.MerchantManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class MerchantAction extends BaseAction {
	
	@Autowired
	private MerchantManager merchantManager;
	
	public void list() {
		try {
			Page<Merchant> p = new Page<Merchant>();
			p.setStartAndLimit(start, limit);
			p = merchantManager.getMerchants(p, params);
			Struts2Utils.renderJson(p);
		} catch (Exception e) {
			logger.error("query inventory error:",e);
			Struts2Utils.renderJson("{success: false, msg: '查询失败'}");
		}
	}
}
