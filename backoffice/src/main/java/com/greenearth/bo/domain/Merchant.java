package com.greenearth.bo.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Merchant {
	private Integer id;
	private City city;
	private Province province;
	private Integer score;
	private Float couponValue;
	private String merchantName;
	private String merchantAddr;
	private Boolean isEnable;
	private Date createdAt;
	private Date createdBy;
	private Date modifiedAt;
	private Date modifiedBy;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@ManyToOne
	@JoinColumn(name = "city_id")
	public City getCity() {
		return city;
	}
	public void setCity(City city) {
		this.city = city;
	}
	
	@ManyToOne
	@JoinColumn(name = "province_id")
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
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(Date createdBy) {
		this.createdBy = createdBy;
	}
	public Date getModifiedAt() {
		return modifiedAt;
	}
	public void setModifiedAt(Date modifiedAt) {
		this.modifiedAt = modifiedAt;
	}
	public Date getModifiedBy() {
		return modifiedBy;
	}
	public void setModifiedBy(Date modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
}
