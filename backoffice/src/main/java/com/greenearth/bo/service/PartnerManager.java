package com.greenearth.bo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.PartnerDao;
import com.greenearth.bo.domain.Partner;

@Service
@Transactional
public class PartnerManager {
	
	@Autowired
	private PartnerDao partnerDao;
	
	@Transactional(readOnly = true)
	public Partner getPartner(Integer id) {
		return partnerDao.getPartner(id);
	}
}
