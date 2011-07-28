package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.District;

public interface DistrictDao {
	List<District> getDistricts();
	List<District> getDistrictsByCity(Integer cityId);
}
