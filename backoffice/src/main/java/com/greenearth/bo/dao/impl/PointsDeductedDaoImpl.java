package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.PointsDeductedDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.PointsDeducted;

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

}
