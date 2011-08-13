package com.greenearth.bo.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class InventoryLog {
	private Long id;
	private Customer customer;
	private InventoryType type;
	private Float weight;
	private Date createdAt;
	private RecycleStation station;
	
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
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("InventoryLog [id=");
		builder.append(id);
		builder.append(", customer=");
		builder.append(customer);
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
