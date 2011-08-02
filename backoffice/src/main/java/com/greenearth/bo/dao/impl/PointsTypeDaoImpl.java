package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.PointsTypeDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.PointsType;

@Repository
public class PointsTypeDaoImpl extends HibernateDao<PointsType, Integer> implements PointsTypeDao {

	@Override
	public List<PointsType> getPointsTypes() {
		return getAll();
	}

}
