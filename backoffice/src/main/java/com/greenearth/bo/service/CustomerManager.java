package com.greenearth.bo.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.CustomerDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Customer;

@Service
@Transactional
public class CustomerManager {
	private Logger log = LoggerFactory.getLogger(CustomerManager.class);
	@Autowired
	private CustomerDao customerDao;

	@Transactional(readOnly = true)
	public Customer getCustomer(Long id) {
		return customerDao.getCustomer(id);
	}

	@Transactional(readOnly = true)
	public Page<Customer> getCustomers(Page<Customer> p, Customer c) {
		return customerDao.getCustomers(p, c);
	}

	public void saveCustomer(Customer c) {
		customerDao.saveCustomer(c);
	}

	public void removeCustomer(Long id) {
		customerDao.removeCustomer(id);
	}
	
	public Customer findCustomerByCellPhone(String cellPhone) {
		return customerDao.findCustomerByCellPhone(cellPhone);
	}
	
	public void changeTotalScore(Customer customer , Float points) {
		customer.setTotalScore(customer.getTotalScore() + points);
		if (customer.getTotalScore() < 0) {
			log.error("customer:" + customer.getId() + "is out of points,total :" + customer.getTotalScore());
		}
	}
}
