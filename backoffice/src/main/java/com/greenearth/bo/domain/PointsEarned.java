package com.greenearth.bo.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class PointsEarned {
	private Long id;
	private Customer customer;
	private PointsType pointsType;
	private Integer points;
	private Date createdAt;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	@ManyToOne
	@JoinColumn(name = "points_type_id")
	public PointsType getPointsType() {
		return pointsType;
	}
	public void setPointsType(PointsType pointsType) {
		this.pointsType = pointsType;
	}
	public Integer getPoints() {
		return points;
	}
	public void setPoints(Integer points) {
		this.points = points;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("PointsEarned [id=");
		builder.append(id);
		builder.append(", customer=");
		builder.append(customer);
		builder.append(", pointsType=");
		builder.append(pointsType);
		builder.append(", points=");
		builder.append(points);
		builder.append(", createdAt=");
		builder.append(createdAt);
		builder.append("]");
		return builder.toString();
	}
}
