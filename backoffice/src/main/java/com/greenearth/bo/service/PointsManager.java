package com.greenearth.bo.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.PointsDeductedDao;
import com.greenearth.bo.dao.PointsEarnedDao;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.domain.PointsDeducted;
import com.greenearth.bo.domain.PointsEarned;

@Service
@Transactional
public class PointsManager {
	@Autowired
	private PointsEarnedDao earnedDao;
	
	@Autowired
	private PointsDeductedDao deductedDao;

	@Transactional(readOnly = true)
	public List<PointsEarned> getPointsEarned() {
		return earnedDao.getPointsEarned();
	}

	public void savePointsEarned(PointsEarned points) {
		earnedDao.savePointsEarned(points);
	}

	@Transactional(readOnly = true)
	public List<PointsDeducted> getPointsDeducted() {
		return deductedDao.getPointsDeducted();
	}

	public void savePointsDeducted(PointsDeducted points) {
		deductedDao.savePointsDeducted(points);
	}
	
	public void earnPoints(Customer customer,Float points,InventoryType type) {
		PointsEarned pointsEarned = new PointsEarned() ;
		pointsEarned.setCreatedAt(new Date());
		pointsEarned.setCustomer(customer);
		pointsEarned.setInventoryType(type);
		pointsEarned.setPoints(points);
		savePointsEarned(pointsEarned);
	}
}
