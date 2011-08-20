package com.greenearth.bo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Inventory {
	private Integer id;
	private InventoryType type;
	private String name;
	private Float weight;
	private RecycleStation station;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	@ManyToOne
	@JoinColumn(name = "inventory_type_id")
	public InventoryType getType() {
		return type;
	}
	public void setType(InventoryType type) {
		this.type = type;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Float getWeight() {
		return weight;
	}
	public void setWeight(Float weight) {
		this.weight = weight;
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
		builder.append("Inventory [id=");
		builder.append(id);
		builder.append(", type=");
		builder.append(type);
		builder.append(", name=");
		builder.append(name);
		builder.append(", weight=");
		builder.append(weight);
		builder.append(", station=");
		builder.append(station);
		builder.append("]");
		return builder.toString();
	}
	
	public static String _StationId = "station.id";
	public static String _TypeId = "type.id";
}
