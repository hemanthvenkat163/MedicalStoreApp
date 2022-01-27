package com.medicalstoreapp.user.vo;

import java.time.LocalDate;
import java.util.Set;

public class ReportDetails {

	
	private long reportId;
	
	private LocalDate startPeriod;
	
	private LocalDate endPeriod;
	
	private String createdDate;
	
	private String reportType;
	
	private Set<OrderDetails> orders;

	public Set<OrderDetails> getOrders() {
		return orders;
	}

	public void setOrders(Set<OrderDetails> orders) {
		this.orders = orders;
	}

	public long getReportId() {
		return reportId;
	}

	public void setReportId(long reportId) {
		this.reportId = reportId;
	}


	public LocalDate getStartPeriod() {
		return startPeriod;
	}

	public void setStartPeriod(LocalDate startPeriod) {
		this.startPeriod = startPeriod;
	}

	public LocalDate getEndPeriod() {
		return endPeriod;
	}

	public void setEndPeriod(LocalDate endPeriod) {
		this.endPeriod = endPeriod;
	}

	public String getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}

	public String getReportType() {
		return reportType;
	}

	public void setReportType(String reportType) {
		this.reportType = reportType;
	}

	@Override
	public String toString() {
		return "ReportDetails [reportId=" + reportId + ", startPeriod=" + startPeriod + ", endPeriod=" + endPeriod
				+ ", createdDate=" + createdDate + ", reportType=" + reportType + "]";
	}
	
	
	
}
