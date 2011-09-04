package com.greenearth.bo.dao;

import com.greenearth.bo.domain.CustomerPoint;

public interface CustomerPointDao {
	public CustomerPoint findPointByCustomerAndType(Long customerId,Integer pointTypeId);
	public void save(CustomerPoint customerPoint);
	Page<CustomerPoint> getCustomerPoints(Page<CustomerPoint> p,Long customerId);
}
