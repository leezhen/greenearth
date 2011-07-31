package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.CityDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.City;

@Repository
public class CityDaoImpl extends HibernateDao<City, Integer> implements CityDao {

	@Override
	public List<City> getCities() {
		return super.getAll();
	}

	@Override
	public City getCity(Integer id) {
		return get(id);
	}

}
