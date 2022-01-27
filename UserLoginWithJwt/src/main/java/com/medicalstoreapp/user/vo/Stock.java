package com.medicalstoreapp.user.vo;

import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


public class Stock {
	
	private Long stockId;
	private String stockName;
	private int units;
	private double price;

	public Stock() {
		super();
	}

	public Long getStockId() {
		return stockId;
	}

	public void setStockId(Long stockId) {
		this.stockId = stockId;
	}

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

	@Override
	public int hashCode() {
		return Objects.hash(price, stockId, stockName, units);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Stock other = (Stock) obj;
		return Double.doubleToLongBits(price) == Double.doubleToLongBits(other.price)
				&& Objects.equals(stockId, other.stockId) && Objects.equals(stockName, other.stockName)
				&& units == other.units;
	}

	public Stock(Long stockId, String stockName, int units, double price) {
		super();
		this.stockId = stockId;
		this.stockName = stockName;
		this.units = units;
		this.price = price;
	}

	@Override
	public String toString() {
		return "Stock [stockId=" + stockId + ", stockName=" + stockName + ", units=" + units + ", price=" + price + "]";
	}

}
