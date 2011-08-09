package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.RecycleStation;

public interface RecycleStationDao {
	List<RecycleStation> getStations();
	Page<RecycleStation> getStations(Page<RecycleStation> page);
	RecycleStation get(Integer id);
}
