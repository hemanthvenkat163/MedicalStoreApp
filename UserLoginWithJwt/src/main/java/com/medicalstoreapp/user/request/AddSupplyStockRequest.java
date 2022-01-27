package com.medicalstoreapp.user.request;

import java.time.LocalDate;

public class AddSupplyStockRequest {

	private Long stockId;

	private Long supplierId;

	private Double suppliedCost;

	private int units;

	private LocalDate suppliedDate;

	private String stockName;

	public String getStockName() {
		return stockName;
	}

	public void setStockName(String stockName) {
		this.stockName = stockName;
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

	public LocalDate getSuppliedDate() {
		return suppliedDate;
	}

	public void setSuppliedDate(LocalDate suppliedDate) {
		this.suppliedDate = suppliedDate;
	}

}
