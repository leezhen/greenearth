package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.PointsEarned;

public interface PointsEarnedDao {
	List<PointsEarned> getPointsEarned();
	void savePointsEarned(PointsEarned points);
}
