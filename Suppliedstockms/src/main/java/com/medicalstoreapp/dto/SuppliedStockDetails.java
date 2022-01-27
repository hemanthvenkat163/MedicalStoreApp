package com.medicalstoreapp.dto;

import java.time.LocalDate;

public class SuppliedStockDetails {
	private Long id;
	private Long stockId;
	private Long supplierId;
	private String stockName;
	private LocalDate suppliedDate;
	private Double suppliedCost;
	private int units;

	
	public String getStockName() {
		return stockName;
	}

	public void setStockName(String stockName) {
		this.stockName = stockName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getStockId() {
		return stockId;
	}

	public void setStockId(Long stockId) {
		this.stockId = stockId;
	}

	public Long getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(Long supplierId) {
		this.supplierId = supplierId;
	}

	public LocalDate getSuppliedDate() {
		return suppliedDate;
	}

	public void setSuppliedDate(LocalDate suppliedDate) {
		this.suppliedDate = suppliedDate;
	}

	public Double getSuppliedCost() {
		return suppliedCost;
	}

	public void setSuppliedCost(Double suppliedCost) {
		this.suppliedCost = suppliedCost;
	}

	public int getUnits() {
		return units;
	}

	public void setUnits(int units) {
		this.units = units;
	}

	@Override
	public String toString() {
		return "SuppliedStockDetails [id=" + id + ", stockId=" + stockId + ", supplierId=" + supplierId + ", stockName="
				+ stockName + ", suppliedDate=" + suppliedDate + ", suppliedCost=" + suppliedCost + ", units=" + units
				+ "]";
	}

	

}
