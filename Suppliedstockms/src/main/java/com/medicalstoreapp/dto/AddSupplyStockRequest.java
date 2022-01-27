package com.medicalstoreapp.dto;

import java.time.LocalDate;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;

@Validated
public class AddSupplyStockRequest {
	
	@NotNull(message="please provide some valid stockid")
	@Min(1)
	private Long stockId;
	@NotNull(message="please provide some valid supplierid")
	@Min(1)
	private Long supplierId;
	@NotNull(message="please provide some valid suppliedcost")
	@Min(1)
	private Double suppliedCost;
	@NotNull(message="please provide some valid units")
	@Min(1)
     private int units;
	@NotNull(message="please provide some valid date")
	@NotNull
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
