package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.DeductionReason;

public interface DeductionReasonDao {
	List<DeductionReason> getReasons();
	DeductionReason get(Integer id);
}
