package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.ProvinceDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.Province;

@Repository
public class ProvinceDaoImpl extends HibernateDao<Province, Integer> implements ProvinceDao {

	@Override
	public List<Province> getProvinces() {
		return this.getAll();
	}
	
}
