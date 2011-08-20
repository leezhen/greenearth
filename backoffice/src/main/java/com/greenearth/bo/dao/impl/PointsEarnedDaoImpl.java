package com.greenearth.bo.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.hibernate.criterion.SimpleExpression;
import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.PointsEarnedDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.PointsEarned;

@Repository
public class PointsEarnedDaoImpl extends HibernateDao<PointsEarned, Long> implements PointsEarnedDao {

	@Override
	public List<PointsEarned> getPointsEarned() {
		return getAll();
	}

	@Override
	public void savePointsEarned(PointsEarned points) {
		save(points);
	}

	@Override
	public Page<PointsEarned> getPointsEarned(Page<PointsEarned> p , Long customerId) {
		SimpleExpression r = Restrictions.eq(PointsEarned._CustomerId, customerId);
		return this.findPage(p, r);
	}

}
