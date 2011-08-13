package com.greenearth.bo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.MenuDao;
import com.greenearth.bo.domain.Menu;

@Service
@Transactional
public class MenuManager {
	@Autowired
	private MenuDao menuDao;
	
	@Transactional(readOnly = true)
	public List<Menu> getRootMenus() {
		return menuDao.getRootMenus();
	}
}
