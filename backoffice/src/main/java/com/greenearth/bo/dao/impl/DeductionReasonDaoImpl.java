package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.DeductionReasonDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.DeductionReason;

@Repository
public class DeductionReasonDaoImpl extends HibernateDao<DeductionReason, Integer> implements DeductionReasonDao {

	@Override
	public List<DeductionReason> getReasons() {
		return getAll();
	}

}
