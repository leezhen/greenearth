package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

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

}
