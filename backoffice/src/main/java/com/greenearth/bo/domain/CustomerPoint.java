package com.greenearth.bo.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class CustomerPoint {
	private Long id;
	private Customer customer;
	private Float totalEarnedPoints;
	private Float totalDeductedPoints;
	private Float totalAvaliablePoints;
	private Date modifiedAt;
	private Date createdAt;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	@OneToOne
	@JoinColumn(name = "customer_id")
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	public Float getTotalEarnedPoints() {
		return totalEarnedPoints;
	}
	public void setTotalEarnedPoints(Float totalEarnedPoints) {
		this.totalEarnedPoints = totalEarnedPoints;
	}
	public Float getTotalDeductedPoints() {
		return totalDeductedPoints;
	}
	public void setTotalDeductedPoints(Float totalDeductedPoints) {
		this.totalDeductedPoints = totalDeductedPoints;
	}
	public Float getTotalAvaliablePoints() {
		return totalAvaliablePoints;
	}
	public void setTotalAvaliablePoints(Float totalAvaliablePoints) {
		this.totalAvaliablePoints = totalAvaliablePoints;
	}
	public Date getModifiedAt() {
		return modifiedAt;
	}
	public void setModifiedAt(Date modifiedAt) {
		this.modifiedAt = modifiedAt;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	

	public static String _CustomerId = "customer.id";
}
