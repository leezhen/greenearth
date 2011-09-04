package com.greenearth.bo.service;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.Constants;
import com.greenearth.bo.dao.CustomerPointDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.PointsDeductedDao;
import com.greenearth.bo.dao.PointsEarnedDao;
import com.greenearth.bo.domain.Customer;
import com.greenearth.bo.domain.CustomerPoint;
import com.greenearth.bo.domain.DeductionReason;
import com.greenearth.bo.domain.InventoryType;
import com.greenearth.bo.domain.PointsDeducted;
import com.greenearth.bo.domain.PointsEarned;
import com.greenearth.bo.domain.PointsType;

@Service
@Transactional
public class PointsManager {
	private static Logger log = LoggerFactory.getLogger(PointsManager.class);
	@Autowired
	private PointsEarnedDao earnedDao;
	
	@Autowired
	private PointsDeductedDao deductedDao;
	
	@Autowired
	private CustomerPointDao customerPointDao;
	
	@Autowired
	private CustomerManager customerManager;

	@Transactional(readOnly = true)
	public List<PointsEarned> getPointsEarned() {
		return earnedDao.getPointsEarned();
	}
	
	@Transactional(readOnly = true)
	public Page<PointsEarned> getPointsEarned(Page<PointsEarned> p,Long customerId) {
		return earnedDao.getPointsEarned(p,customerId);
	}
	
	@Transactional(readOnly = true)
	public Page<CustomerPoint> getCustomerPoints(Page<CustomerPoint> p,Long customerId) {
		return customerPointDao.getCustomerPoints(p,customerId);
	}
	
	public void savePointsEarned(PointsEarned points) {
		earnedDao.savePointsEarned(points);
	}

	@Transactional(readOnly = true)
	public List<PointsDeducted> getPointsDeducted() {
		return deductedDao.getPointsDeducted();
	}
	
	@Transactional(readOnly = true)
	public Page<PointsDeducted> getPointsDeducted(Page<PointsDeducted> p, Long customerId) {
		return deductedDao.getPointsDeducted(p,customerId);
	}

	public void savePointsDeducted(PointsDeducted points) {
		deductedDao.savePointsDeducted(points);
	}
	
	/**
	 * 积分记录
	 * @param customer
	 * @param points
	 * @param type
	 */
	public void earnPoints(Customer customer,Float points,InventoryType type ,PointsType pointType) {
		PointsEarned pointsEarned = new PointsEarned() ;
		pointsEarned.setCreatedAt(new Date());
		pointsEarned.setCustomer(customer);
		pointsEarned.setInventoryType(type);
		pointsEarned.setPointsType(pointType);
		pointsEarned.setPoints(points);
		savePointsEarned(pointsEarned);
	}
	/**
	 * 扣分记录
	 * @param cutomer
	 * @param points
	 * @param reasonId
	 */
	public void deductPoints(Customer customer,Float points,Integer reasonId) {
		PointsDeducted deduct = new PointsDeducted();
		deduct.setCreatedAt(new Date());
		deduct.setCustomer(customer);
		deduct.setPoints(points);
		DeductionReason reason = new DeductionReason();
		reason.setId(reasonId);
		deduct.setReason(reason);
		savePointsDeducted(deduct);
	}
	
	public void addPoints(Customer customer,Float points,InventoryType type , PointsType pointType) {
		earnPoints(customer,points,type,pointType);
		customerManager.changeTotalScore(customer, points);
//		CustomerPoint customerPoint = customerPointDao.findPointByCustomerAndType(customer.getId(),pointType.getId());
//		if(customerPoint == null) {
//			customerPoint = new CustomerPoint();
//			customerPoint.setCustomer(customer);
//			customerPoint.setCreatedAt(new Date());
//			customerPoint.setTotalAvaliablePoints(points);
//			customerPoint.setPointType(pointType);
//		} else {
//			customerPoint.setModifiedAt(new Date());
//			customerPoint.setTotalAvaliablePoints(customerPoint.getTotalAvaliablePoints() + points);
//		}
//		customerPointDao.save(customerPoint);
	}
	
	public void minusPoints(Customer customer,Float points,Integer reasonId) {
		deductPoints(customer,points,reasonId);
		customerManager.changeTotalScore(customer, -points);
//		CustomerPoint customerPoint = customerPointDao.findPointByCustomerAndType(customer.getId(),Constants.Point_Type_Trash);
//		if(customerPoint == null) {
//			log.error("customer:" + customer.getId() + "has no points to deduct");
//			throw new RuntimeException("该用户无积分记录");
//		}
//		customerPoint.setModifiedAt(new Date());
//		customerPoint.setTotalAvaliablePoints(customerPoint.getTotalAvaliablePoints() - points);
//		if(customerPoint.getTotalAvaliablePoints() < 0 ) {
//			log.info("customer:" + customer.getId() + "avaliable points is less than 0 ,value:" + customerPoint.getTotalAvaliablePoints());
//			customerPoint.setTotalAvaliablePoints((float) 0.0);
//		}
//		customerPointDao.save(customerPoint);
	}
}
