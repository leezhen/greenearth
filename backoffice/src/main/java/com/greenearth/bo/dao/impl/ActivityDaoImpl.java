package com.greenearth.bo.dao.impl;

import java.util.Map;
import java.util.Set;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.ActivityDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.Activity;

@Repository
public class ActivityDaoImpl extends HibernateDao<Activity, Integer> implements ActivityDao {

	@Override
	public Page<Activity> getActivities(Page<Activity> p,
			Map<String, Object> params) {
		Criteria cr = createCriteria();
		Set<String> keySet = params.keySet();
		for(String key : keySet) {
			cr.add(Restrictions.eq(key, params.get(key)));
		}
		return this.findPage(p, cr);
	}

}
