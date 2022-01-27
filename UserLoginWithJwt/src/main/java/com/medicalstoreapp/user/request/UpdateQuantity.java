package com.medicalstoreapp.user.request;

public class UpdateQuantity {

	private String stockName;

	private int units;

	public String getStockName() {
		return stockName;
	}

	public void setStockName(String stockName) {
		this.stockName = stockName;
	}

	public int getUnits() {
		return units;
	}

	public void setUnits(int units) {
		this.units = units;
	}

}
