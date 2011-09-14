package com.greenearth.bo.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.MerchantDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Inventory;
import com.greenearth.bo.domain.Merchant;

@Service
@Transactional
public class MerchantManager {
	
	@Autowired
	private MerchantDao merchantDao;
	
	@Transactional(readOnly = true)
	public Page<Merchant> getMerchants(Page<Merchant> p, Map<String,Object> params) {
		return merchantDao.getMerchants(p,params);
	}
	
	public Merchant get(Integer id) {
		return merchantDao.get(id);
	}
	
	public void save(Merchant m) {
		merchantDao.save(m);
	}
}
