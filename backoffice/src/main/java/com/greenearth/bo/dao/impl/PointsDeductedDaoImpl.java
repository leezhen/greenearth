package com.greenearth.bo.dao.impl;

import java.util.List;

import org.hibernate.criterion.Restrictions;
import org.hibernate.criterion.SimpleExpression;
import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.PointsDeductedDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.PointsDeducted;
import com.greenearth.bo.domain.PointsEarned;

@Repository
public class PointsDeductedDaoImpl extends HibernateDao<PointsDeducted, Integer> implements PointsDeductedDao {

	@Override
	public List<PointsDeducted> getPointsDeducted() {
		return getAll();
	}

	@Override
	public void savePointsDeducted(PointsDeducted points) {
		save(points);
	}

	@Override
	public Page<PointsDeducted> getPointsDeducted(Page<PointsDeducted> p,Long customerId) {
		SimpleExpression r = Restrictions.eq(PointsDeducted._CustomerId, customerId);
		return this.findPage(p, r);
	}

}
