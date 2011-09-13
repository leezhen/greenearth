package com.greenearth.bo.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.ActivityDao;
import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Activity;

@Service
@Transactional
public class ActivityManager {
	@Autowired
	private ActivityDao activityDao;
	
	@Transactional(readOnly = true)
	public Page<Activity> getActivities(Page<Activity> p, Map<String,Object> params) {
		return activityDao.getActivities(p,params);
	}
}
