package com.medicalstoreapp.stockms.dto;

import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;
import org.springframework.validation.annotation.Validated;

@Validated
public class CreateStockRequest {

	@NotNull(message = "provide some stockname")
	@Length(max = 200, min = 1)
	private String stockName;

	@NotNull
	private int units;

	@NotNull
	private double price;

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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

}
