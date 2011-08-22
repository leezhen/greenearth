package com.greenearth.bo.dao.impl;

import org.hibernate.criterion.Restrictions;
import org.hibernate.criterion.SimpleExpression;
import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.CustomerPointDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.CustomerPoint;
import com.greenearth.bo.domain.PointsDeducted;

@Repository
public class CustomerPointDaoImpl extends HibernateDao<CustomerPoint, Long> implements CustomerPointDao {

	@Override
	public CustomerPoint findPointByCustomer(Long customerId) {
		return this.findUniqueBy(CustomerPoint._CustomerId,customerId);
	}

	@Override
	public Page<CustomerPoint> getCustomerPoints(Page<CustomerPoint> p,
			Long customerId) {
		SimpleExpression r = Restrictions.eq(CustomerPoint._CustomerId, customerId);
		return this.findPage(p, r);
	}
	
}
