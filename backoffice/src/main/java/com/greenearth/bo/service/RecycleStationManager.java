package com.greenearth.bo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.RecycleStationDao;
import com.greenearth.bo.domain.RecycleStation;

@Service
@Transactional
public class RecycleStationManager {
	
	@Autowired
	private RecycleStationDao recycleStationDao;
	
	@Transactional(readOnly = true)
	public Page<RecycleStation> getRecycleStations(Page<RecycleStation> p) {
		return recycleStationDao.getStations(p);
	}
	
	@Transactional(readOnly = true)
	public RecycleStation getRecycleStation(Integer id) {
		return recycleStationDao.get(id);
	}
}
