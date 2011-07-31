package com.greenearth.bo.action;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.City;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.domain.District;
import com.greenearth.bo.service.CustomerManager;
import com.greenearth.bo.service.DistrictManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class CustomerAction extends BaseAction {
	private Long id;
	private String name;
	private String cellphone;
	private String streetAddress;
	private String barcode;
	private Integer cityId;
	private Integer districtId;
	
	@Autowired
	private CustomerManager customerManager;
	
	@Autowired
	private DistrictManager districtManager;
	
	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setCellphone(String cellphone) {
		this.cellphone = cellphone;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	public void setBarcode(String barcode) {
		this.barcode = barcode;
	}
	
	public void setCityId(Integer cityId) {
		this.cityId = cityId;
	}

	public void setDistrictId(Integer districtId) {
		this.districtId = districtId;
	}

	@Override
	public String execute() throws Exception {
		return super.execute();
	}

	public void list() {
		Page<Customer> p = new Page<Customer>();
		p.setPageNo(start);
		p.setPageSize(limit);
		p = customerManager.getCustomers(p);
		Struts2Utils.renderJson(p);
	}
	
	public void delete() {
		customerManager.removeCustomer(id);
		Struts2Utils.renderJson("{success: true, msg: '删除成功'}");
	}
	
	public void save() {
		boolean isNew = (id == null ? true : false);
		Customer c = null;
		if (isNew) {
			c = new Customer();
			c.setCreatedAt(new Date());
			c.setCreatedBy("admin");
		} else {
			c = customerManager.getCustomer(id);
			c.setModifiedAt(new Date());
			c.setModifiedBy("admin");
		}
		c.setName(name);
		c.setCellphone(cellphone);
		c.setStreetAddress(streetAddress);
		c.setBarcode(barcode);
		c.setCity(districtManager.getCity(cityId));
		c.setDistrict(districtManager.getDistrict(districtId));
		customerManager.saveCustomer(c);
		Struts2Utils.renderJson("{success: true, msg: '" + (isNew ? "添加" : "修改") + "成功'}");
	}
	
	public void cities() {
		List<City> cities = districtManager.getCities();
		Struts2Utils.renderJson(cities);
	}
	
	public void districts() {
		List<District> districts = null;
		if (cityId != null)
			districts = districtManager.getDistrictsByCity(cityId);
		else 
			districts = districtManager.getDistricts();
		Struts2Utils.renderJson(districts);
	}
}
