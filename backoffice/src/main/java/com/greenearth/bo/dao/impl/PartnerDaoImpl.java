package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.PartnerDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.Partner;

@Repository
public class PartnerDaoImpl extends HibernateDao<Partner,Integer> implements PartnerDao {

	@Override
	public List<Partner> getPartners() {
		// TODO Auto-generated method stub
		return getAll();
	}

	@Override
	public Partner getPartner(Integer id) {
		// TODO Auto-generated method stub
		return get(id);
	}

}
