package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.DistrictDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.District;

@Repository
public class DistrictDaoImpl extends HibernateDao<District, Integer> implements
		DistrictDao {

	@Override
	public List<District> getDistricts() {
		return super.getAll();
	}

	@Override
	public List<District> getDistrictsByCity(Integer cityId) {
		return super.findBy("city.id", cityId);
	}

}
