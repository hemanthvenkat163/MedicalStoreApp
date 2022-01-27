package com.medicalstoreapp.user.request;


public class AddOrderRequest {

	private Long stockId;

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
