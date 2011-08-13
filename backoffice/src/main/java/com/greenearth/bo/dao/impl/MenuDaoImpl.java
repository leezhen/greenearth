package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.MenuDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.Menu;

@Repository
public class MenuDaoImpl extends HibernateDao<Menu, Integer> implements MenuDao {

	@Override
	public List<Menu> getRootMenus() {
		return super.find("from Menu where parentMenu is null");
	}

}
