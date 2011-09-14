package com.greenearth.bo.action;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.Activity;
import com.greenearth.bo.domain.City;
import com.greenearth.bo.domain.Merchant;
import com.greenearth.bo.domain.Province;
import com.greenearth.bo.service.ActivityManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class ActivityAction extends BaseAction {
	
	@Autowired
	private ActivityManager activityManager;
	
	private Integer id;
	private City city;
	private Province province;
	private String name;
	private Integer score;
	private String desc;
	private Boolean isEnable;
	
	public void list() {
		try {
			Page<Activity> p = new Page<Activity>();
			p.setStartAndLimit(start, limit);
			p = activityManager.getActivities(p, params);
			Struts2Utils.renderJson(p);
		} catch (Exception e) {
			logger.error("query inventory error:",e);
			Struts2Utils.renderJson("{success: false, msg: '查询失败'}");
		}
	}
	
	public void save() {
		try {
			Activity a = null ;
			if (this.getId() == null) {
				a = new Activity();
				a.setCreatedAt(new Date());
				a.setCreatedBy("System");
			} else {
				a = activityManager.get(id);
				a.setModifiedBy("System");
			}
			a.setCity(city);
			a.setProvince(province);
			a.setIsEnable(isEnable);
			a.setDesc(desc);
			a.setName(name);
			a.setScore(score);
			activityManager.save(a);
			Struts2Utils.renderJson("{success: true, msg: '" + (this.getId() == null ? "添加" : "修改") + "成功'}");
		} catch (Exception e) {
			logger.error("save activity info failes",e);
			Struts2Utils.renderJson("{success: false, msg: '" + (this.getId() == null ? "添加" : "修改") + "失败'}");
		}
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public Province getProvince() {
		return province;
	}

	public void setProvince(Province province) {
		this.province = province;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Boolean getIsEnable() {
		return isEnable;
	}

	public void setIsEnable(Boolean isEnable) {
		this.isEnable = isEnable;
	}
}
