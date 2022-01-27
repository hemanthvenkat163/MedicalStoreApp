package com.medicalstoreapp.ordermodule.entities;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class CreatedOrder {
	
	@Id
	@GeneratedValue
	private Long orderId;
	
	@Column(nullable=false)
	private LocalDate orderDate;
	
	@Column(nullable=false)
	private Double orderPrice;
	
	@Column(nullable=false)
	private Long stockId;
	
	@Column(nullable=false)
	private Long units;
	
	
	public CreatedOrder() {
		super();
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}

	public Double getOrderPrice() {
		return orderPrice;
	}

	public void setOrderPrice(Double orderPrice) {
		this.orderPrice = orderPrice;
	}

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

	@Override
	public int hashCode() {
		return Objects.hash(orderDate, orderId, orderPrice, stockId, units);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CreatedOrder other = (CreatedOrder) obj;
		return Objects.equals(orderDate, other.orderDate) && Objects.equals(orderId, other.orderId)
				&& Objects.equals(orderPrice, other.orderPrice) && Objects.equals(stockId, other.stockId)
				&& Objects.equals(units, other.units);
	}

	@Override
	public String toString() {
		return "CreatedOrder [orderId=" + orderId + ", orderDate=" + orderDate + ", orderPrice=" + orderPrice
				+ ", stockId=" + stockId + ", units=" + units + "]";
	}
	

}
