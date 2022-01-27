package com.medicalstoreapp.reportms.dto;

public class OrderDetails {
	
	private Long orderId;
	private String orderDate;
	private Double orderPrice;

	
	public OrderDetails() {
		super();
	}


	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setCreatedDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public Double getOrderPrice() {
		return orderPrice;
	}

	public void setOrderPrice(Double orderPrice) {
		this.orderPrice = orderPrice;
	}

	@Override
	public String toString() {
		return "OrderDetails orderId=" + orderId + ", createdDate=" + orderDate + ", orderPrice=" + orderPrice;
	}
}
