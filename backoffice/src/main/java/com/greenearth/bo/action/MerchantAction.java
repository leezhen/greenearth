package com.greenearth.bo.action;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.dao.Page;
import com.greenearth.bo.domain.City;
import com.greenearth.bo.domain.Merchant;
import com.greenearth.bo.domain.Province;
import com.greenearth.bo.service.MerchantManager;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class MerchantAction extends BaseAction {
	
	@Autowired
	private MerchantManager merchantManager;
	
	private Integer id;
	private City city;
	private Province province;
	private Integer score;
	private Float couponValue;
	private String merchantName;
	private String merchantAddr;
	private Boolean isEnable;
	
	public void list() {
		try {
			Page<Merchant> p = new Page<Merchant>();
			p.setStartAndLimit(start, limit);
			p = merchantManager.getMerchants(p, params);
			Struts2Utils.renderJson(p);
		} catch (Exception e) {
			logger.error("query inventory error:",e);
			Struts2Utils.renderJson("{success: false, msg: '查询失败'}");
		}
	}
	
	public void save() {
		try {
			Merchant m = null ;
			if (this.getId() == null) {
				m = new Merchant();
				m.setCreatedAt(new Date());
				m.setCreatedBy("System");
			} else {
				m = merchantManager.get(id);
				m.setModifiedBy("System");
			}
			m.setCity(city);
			m.setProvince(province);
			m.setCouponValue(couponValue);
			m.setIsEnable(isEnable);
			m.setMerchantAddr(merchantAddr);
			m.setMerchantName(merchantName);
			m.setScore(score);
			merchantManager.save(m);
			Struts2Utils.renderJson("{success: true, msg: '" + (this.getId() == null ? "添加" : "修改") + "成功'}");
		} catch (Exception e) {
			logger.error("save merchant info failes",e);
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

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

	public Float getCouponValue() {
		return couponValue;
	}

	public void setCouponValue(Float couponValue) {
		this.couponValue = couponValue;
	}

	public String getMerchantName() {
		return merchantName;
	}

	public void setMerchantName(String merchantName) {
		this.merchantName = merchantName;
	}

	public String getMerchantAddr() {
		return merchantAddr;
	}

	public void setMerchantAddr(String merchantAddr) {
		this.merchantAddr = merchantAddr;
	}

	public Boolean getIsEnable() {
		return isEnable;
	}

	public void setIsEnable(Boolean isEnable) {
		this.isEnable = isEnable;
	}
}
