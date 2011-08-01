package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.PointsDeducted;

public interface PointsDeductedDao {
	List<PointsDeducted> getPointsDeducted();
	void savePointsDeducted(PointsDeducted points);
}
