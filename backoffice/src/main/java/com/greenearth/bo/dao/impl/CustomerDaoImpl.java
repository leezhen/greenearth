package com.greenearth.bo.dao.impl;

import org.hibernate.criterion.Example;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.hibernate.criterion.SimpleExpression;
import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.CustomerDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.domain.Inventory;

@Repository
public class CustomerDaoImpl extends HibernateDao<Customer, Long> implements CustomerDao {

	@Override
	public Customer getCustomer(Long id) {
		return get(id);
	}

	@Override
	public Page<Customer> getCustomers(Page<Customer> p, Customer c) {
		Example example = Example.create(c)
				.excludeZeroes()           //exclude zero valued properties
			    .enableLike(MatchMode.ANYWHERE);             //use like for string comparisons
		return super.findPage(p, example);
	}

	@Override
	public void saveCustomer(Customer c) {
		save(c);
	}

	@Override
	public void removeCustomer(Long id) {
		delete(id);
	}

	@Override
	public Customer findCustomerByCellPhone(String cellPhone) {
		SimpleExpression r = Restrictions.eq(Customer._CellPhone, cellPhone);
		return this.findUnique(r);
	}

}
