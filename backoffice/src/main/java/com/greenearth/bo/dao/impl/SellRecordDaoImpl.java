package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;


import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.SellRecordDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.SellRecord;

@Repository
public class SellRecordDaoImpl extends HibernateDao<SellRecord, Long>
		implements SellRecordDao {

	@Override
	public List<SellRecord> getSellRecords() {
		// TODO Auto-generated method stub
		return getAll();
	}

	@Override
	public Page<SellRecord> getSellRecords(Page<SellRecord> p) {
		// TODO Auto-generated method stub
		return this.findPage(p, "from SellRecord");
	}

}
