package com.greenearth.bo.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class PointsDeducted {
	private Long id;
	private Customer customer;
	private DeductionReason reason;
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
	@JoinColumn(name = "deduction_reason_id")
	public DeductionReason getReason() {
		return reason;
	}
	public void setReason(DeductionReason reason) {
		this.reason = reason;
	}
	public Integer getPoints() {
		return points;
	}
	public void setScore(Integer points) {
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
		builder.append("PointsDeducted [id=");
		builder.append(id);
		builder.append(", customer=");
		builder.append(customer);
		builder.append(", reason=");
		builder.append(reason);
		builder.append(", points=");
		builder.append(points);
		builder.append(", createdAt=");
		builder.append(createdAt);
		builder.append("]");
		return builder.toString();
	}
	
}
