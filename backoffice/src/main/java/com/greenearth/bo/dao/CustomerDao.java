package com.greenearth.bo.dao;

import java.util.Map;

import com.greenearth.bo.domain.Customer;

public interface CustomerDao {
	Customer getCustomer(Long id);
	Page<Customer> getCustomers(Page<Customer> p, Map<String,Object> params);
	void saveCustomer(Customer c);
	void removeCustomer(Long id);
	Customer findCustomerByCellPhone(String cellPhone);
}
