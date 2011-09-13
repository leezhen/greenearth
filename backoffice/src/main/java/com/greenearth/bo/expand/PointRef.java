package com.greenearth.bo.expand;
/**
 * 接受并转换前台store sync传过来的json数据
 * @author lizhen
 *
 */
public class PointRef {
	private String barCode;
	private Integer inventoryTypeId;
	private Integer reasonId;
	private Float weight;
	
	public String getBarCode() {
		return barCode;
	}
	public void setBarCode(String barCode) {
		this.barCode = barCode;
	}
	public Integer getInventoryTypeId() {
		return inventoryTypeId;
	}
	public void setInventoryTypeId(Integer inventoryTypeId) {
		this.inventoryTypeId = inventoryTypeId;
	}
	public Integer getReasonId() {
		return reasonId;
	}
	public void setReasonId(Integer reasonId) {
		this.reasonId = reasonId;
	}
	public Float getWeight() {
		return weight;
	}
	public void setWeight(Float weight) {
		this.weight = weight;
	}
}
