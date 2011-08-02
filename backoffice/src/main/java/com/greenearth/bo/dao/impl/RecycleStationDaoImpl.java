package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.RecycleStationDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.RecycleStation;

@Repository
public class RecycleStationDaoImpl extends HibernateDao<RecycleStation, Integer> implements RecycleStationDao {

	@Override
	public List<RecycleStation> getStations() {
		return getAll();
	}

}
