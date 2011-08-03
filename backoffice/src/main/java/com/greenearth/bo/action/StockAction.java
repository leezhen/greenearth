package com.greenearth.bo.action;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class StockAction extends BaseAction {
	
	
	public void list()
	{
		Page<Customer> p = new Page<Customer>();
		p.setPageNo(start);
		p.setPageSize(limit);
		Struts2Utils.renderJson(p);
	}
}
