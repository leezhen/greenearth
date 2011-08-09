package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.Partner;

public interface PartnerDao {
	
	List<Partner> getPartners();
	Partner getPartner(Integer id);
}
