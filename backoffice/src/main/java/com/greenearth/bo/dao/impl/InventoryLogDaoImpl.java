package com.greenearth.bo.dao.impl;

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
	public Page<InventoryLog> getInventoryLogs(Page<InventoryLog> p) {
		return this.findPage(p, "from InventoryLog");
	}

}
