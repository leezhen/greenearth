package com.greenearth.bo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenearth.bo.dao.MenuDao;
import com.greenearth.bo.dao.UserDao;
import com.greenearth.bo.domain.Menu;
import com.greenearth.bo.domain.Role;
import com.greenearth.bo.domain.User;

@Service
@Transactional
public class MenuManager {
	
	@Autowired
	private MenuDao menuDao;
	
	@Autowired
	private UserDao userDao;
	
	/**
	 * 获取所有的根菜单
	 * @return 菜单列表
	 */
	@Transactional(readOnly = true)
	public List<Menu> getRootMenus() {
		return menuDao.getRootMenus();
	}
	
	/**
	 * 根据用户获取相应的根菜单
	 * @param username 用户名
	 * @return 菜单列表
	 */
	@Transactional(readOnly = true)
	public List<Menu> getRootMenus(Long userId) {
		List<Menu> allMenus = new ArrayList<Menu>();
		User user = userDao.getUser(userId);
		for (Role role : user.getRoles()) {
			List<Menu> menus = role.getMenus();
			for (Menu m : menus) {
				// 判断menu是否是根菜单，如果不是，需要递归添加父菜单（目前只支持两极菜单）
				Menu pm = m.getParentMenu();
				if (pm != null) {
					if (allMenus.contains(pm)) {
						List<Menu> sm = pm.getSubMenus();
						sm.add(m);
					} else {
						List<Menu> sm = new ArrayList<Menu>();
						sm.add(m);
						pm.setSubMenus(sm);
						allMenus.add(pm);
					}
				} else {
					allMenus.add(m);
				}
			}
		}
		
		return allMenus;
	}
}
