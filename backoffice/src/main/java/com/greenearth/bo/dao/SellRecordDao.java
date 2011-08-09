package com.greenearth.bo.dao;

import java.util.List;

import com.greenearth.bo.domain.SellRecord;

public interface SellRecordDao {
	List<SellRecord> getSellRecords();
	Page<SellRecord> getSellRecords(Page<SellRecord> p);
	void save(SellRecord sellRecord);
}
