package com.greenearth.bo.dao;

import java.util.Map;

import com.greenearth.bo.domain.Activity;

public interface ActivityDao {
	Page<Activity> getActivities(Page<Activity> p, Map<String,Object> params);
}
