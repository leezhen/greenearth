package com.greenearth.bo.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class DeductionRule {
	private Integer id;
	private DeductionReason deductionReason;
	private Float points;
	private Date createdAt;
	private Date modifiedAt;
	private String createdBy;
	private String modifiedBy;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@ManyToOne
	@JoinColumn(name = "dedcution_reason_id")
	public DeductionReason getDeductionReason() {
		return deductionReason;
	}
	public void setDeductionReason(DeductionReason deductionReason) {
		this.deductionReason = deductionReason;
	}
	
	public Float getPoints() {
		return points;
	}
	public void setPoints(Float points) {
		this.points = points;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getModifiedAt() {
		return modifiedAt;
	}
	public void setModifiedAt(Date modifiedAt) {
		this.modifiedAt = modifiedAt;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public String getModifiedBy() {
		return modifiedBy;
	}
	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
}
