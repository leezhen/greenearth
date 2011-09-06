package com.greenearth.bo.dao.impl;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
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
	public Page<SellRecord> getSellRecords(Page<SellRecord> p,Map<String,Object> params) {
		Criteria cr = createCriteria();
		Set<String> keySet = params.keySet();
		for(String key : keySet) {
			cr.add(Restrictions.eq(key, params.get(key)));
		}
		return this.findPage(p, cr);
	}

}
