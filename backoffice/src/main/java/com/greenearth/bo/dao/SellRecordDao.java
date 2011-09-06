package com.greenearth.bo.dao;

import java.util.List;
import java.util.Map;

import com.greenearth.bo.domain.SellRecord;

public interface SellRecordDao {
	List<SellRecord> getSellRecords();
	Page<SellRecord> getSellRecords(Page<SellRecord> p,Map<String,Object> params);
	void save(SellRecord sellRecord);
}
