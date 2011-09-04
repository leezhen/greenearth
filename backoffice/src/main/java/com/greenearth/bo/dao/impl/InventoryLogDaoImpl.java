package com.greenearth.bo.dao.impl;

import java.util.Map;
import java.util.Set;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.InventoryLogDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.InventoryLog;

@Repository
public class InventoryLogDaoImpl extends HibernateDao<InventoryLog, Long> implements InventoryLogDao {

	@Override
	public void saveInventoryLog(InventoryLog log) {
		save(log);
	}

	@Override
	public Page<InventoryLog> getInventoryLogs(Page<InventoryLog> p,Map<String,Object> params) {
		Criteria cr = createCriteria();
		Set<String> keySet = params.keySet();
		for(String key : keySet) {
			cr.add(Restrictions.eq(key, params.get(key)));
		}
		return this.findPage(p, cr);
	}

}
