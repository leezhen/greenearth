package com.greenearth.bo.dao;

import com.greenearth.bo.domain.Customer;

public interface CustomerDao {
	Customer getCustomer(Long id);
	Page<Customer> getCustomers(Page<Customer> p, Customer c);
	void saveCustomer(Customer c);
	void removeCustomer(Long id);
}
