package com.greenearth.bo.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class PointRule {
	private Integer id;
	private PointsType pointsType;
	private InventoryType inventoryType;
	private Float weight;
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
	@JoinColumn(name = "points_type_id")
	public PointsType getPointsType() {
		return pointsType;
	}
	public void setPointsType(PointsType pointsType) {
		this.pointsType = pointsType;
	}
	
	@ManyToOne
	@JoinColumn(name = "inventory_type_id")
	public InventoryType getInventoryType() {
		return inventoryType;
	}
	public void setInventoryType(InventoryType inventoryType) {
		this.inventoryType = inventoryType;
	}
	public Float getWeight() {
		return weight;
	}
	public void setWeight(Float weight) {
		this.weight = weight;
	}
	public Float getPoints() {
		return points;
	}
	public void setPoints(Float points) {
		this.points = points;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
	public String getModifiedBy() {
		return modifiedBy;
	}
	public void setModifiedAt(Date modifiedAt) {
		this.modifiedAt = modifiedAt;
	}
	public Date getModifiedAt() {
		return modifiedAt;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	
}
