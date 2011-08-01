package com.greenearth.bo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.DeductionReasonDao;
import com.greenearth.bo.dao.InventoryTypeDao;
import com.greenearth.bo.dao.PointsTypeDao;
import com.greenearth.bo.dao.RecycleStationDao;
import com.greenearth.bo.domain.DeductionReason;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.domain.PointsType;
import com.greenearth.bo.domain.RecycleStation;

@Service
@Transactional
public class DictionaryManager {
	@Autowired
	private DeductionReasonDao reasonDao;
	
	@Autowired
	private PointsTypeDao pointsTypeDao;
	
	@Autowired
	private RecycleStationDao stationDao;
	
	@Autowired
	private InventoryTypeDao inventoryTypeDao;

	@Transactional(readOnly = true)
	public List<DeductionReason> getReasons() {
		return reasonDao.getReasons();
	}

	@Transactional(readOnly = true)
	public List<PointsType> getPointsTypes() {
		return pointsTypeDao.getPointsTypes();
	}

	@Transactional(readOnly = true)
	public List<RecycleStation> getStations() {
		return stationDao.getStations();
	}

	@Transactional(readOnly = true)
	public List<InventoryType> getInventoryTypes() {
		return inventoryTypeDao.getInventoryTypes();
	}
}
