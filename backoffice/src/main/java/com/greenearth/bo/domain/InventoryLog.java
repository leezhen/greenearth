package com.greenearth.bo.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

@Entity
public class InventoryLog {
	private Long id;
//	private Customer customer;
	private InventoryType type;
	private Float weight;
	private Date createdAt;
	private RecycleStation station;
//	private String barCode;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
//	@ManyToOne
//	@JoinColumn(name = "customer_id")
//	public Customer getCustomer() {
//		return customer;
//	}
//	public void setCustomer(Customer customer) {
//		this.customer = customer;
//	}
	
	@ManyToOne
	@JoinColumn(name = "inventory_type_id")
	public InventoryType getType() {
		return type;
	}
	public void setType(InventoryType type) {
		this.type = type;
	}
	public Float getWeight() {
		return weight;
	}
	public void setWeight(Float weight) {
		this.weight = weight;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	@ManyToOne
	@JoinColumn(name = "recycle_station_id")
	public RecycleStation getStation() {
		return station;
	}
	public void setStation(RecycleStation station) {
		this.station = station;
	}
	
//	@Transient
//	public Long getCustomerId() {
//		return customer.getId();
//	}
//	public void setCustomerId(Long customerId) {
//		Customer c = new Customer();
//		c.setId(customerId);
//		this.setCustomer(c);
//	}
	
	@Transient
	public Integer getStationId() {
		return station.getId();
	}
	public void setStationId(Integer stationId) {
		RecycleStation r = new RecycleStation();
		r.setId(stationId);
		this.setStation(r);
	}
	
	@Transient
	public Integer getInventoryTypeId() {
		return type.getId();
	}
	public void setInventoryTypeId(Integer inventoryTypeId) {
		InventoryType t = new InventoryType();
		t.setId(inventoryTypeId);
		this.setType(t);
	}
	
//	@Transient
//	public String getBarCode() {
//		return barCode;
//	}
//	public void setBarCode(String barCode) {
//		this.barCode = barCode;
//	}
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("InventoryLog [id=");
		builder.append(id);
//		builder.append(", customer=");
//		builder.append(customer);
		builder.append(", type=");
		builder.append(type);
		builder.append(", weight=");
		builder.append(weight);
		builder.append(", createdAt=");
		builder.append(createdAt);
		builder.append(", station=");
		builder.append(station);
		builder.append("]");
		return builder.toString();
	}
}
