package com.greenearth.bo.dao;

import com.greenearth.bo.domain.CustomerPoint;

public interface CustomerPointDao {
	public CustomerPoint findPointByCustomer(Long customerId);
	public void save(CustomerPoint customerPoint);
	Page<CustomerPoint> getCustomerPoints(Page<CustomerPoint> p,Long customerId);
}
