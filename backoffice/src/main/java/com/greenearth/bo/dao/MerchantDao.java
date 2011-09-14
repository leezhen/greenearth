package com.greenearth.bo.dao;

import java.util.Map;

import com.greenearth.bo.domain.Merchant;

public interface MerchantDao {
	Page<Merchant> getMerchants(Page<Merchant> p ,Map<String,Object> params);
	Merchant get(Integer id);
	void save(Merchant m);
}
