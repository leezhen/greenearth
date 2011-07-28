package com.greenearth.bo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.CityDao;
import com.greenearth.bo.dao.DistrictDao;
import com.greenearth.bo.domain.City;
import com.greenearth.bo.domain.District;

@Service
@Transactional
public class DistrictManager {
	@Autowired
	private CityDao cityDao;
	
	@Autowired
	private DistrictDao districtDao;

	@Transactional(readOnly = true)
	public List<City> getCities() {
		return cityDao.getCities();
	}

	@Transactional(readOnly = true)
	public List<District> getDistricts() {
		return districtDao.getDistricts();
	}

	@Transactional(readOnly = true)
	public List<District> getDistrictsByCity(Integer cityId) {
		return districtDao.getDistrictsByCity(cityId);
	}
	
}
