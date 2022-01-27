package com.medicalstoreapp.ordermodule.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;

@Validated
public class AddOrderRequest {
	
	@NotNull(message="please provide some stockID")
	@Min(1)
	private Long stockId;
	@NotNull(message="please provide some units")
	@Min(1)
	private Long units;
	public Long getStockId() {
		return stockId;
	}
	public void setStockId(Long stockId) {
		this.stockId = stockId;
	}
	public Long getUnits() {
		return units;
	}
	public void setUnits(Long units) {
		this.units = units;
	}
	
	
	

}
