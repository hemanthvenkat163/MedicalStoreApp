package com.medicalstoreapp.reportms.entities;

import java.time.LocalDate;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.medicalstoreapp.reportms.constants.ReportType;

@Entity
public class Report {
	
	@GeneratedValue
	@Id
	private Long reportId;
	
	@Column(nullable=false)
	private LocalDate startPeriod;
	
	@Column(nullable=false)
	private LocalDate endPeriod;
	
	@Column(nullable=false)
	private LocalDate createdDate;
	
	@Enumerated(EnumType.STRING)
	private ReportType reportType;
	
	@ElementCollection
	private Set<Long> orders;


	public Set<Long> getOrders() {
		return orders;
	}

	public void setOrders(Set<Long> orders) {
		this.orders = orders;
	}

	public Long getReportId() {
		return reportId;
	}

	public void setReportId(Long reportId) {
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

	public LocalDate getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDate createdDate) {
		this.createdDate = createdDate;
	}

	public ReportType getReportType() {
		return reportType;
	}

	public void setReportType(ReportType reportType) {
		this.reportType = reportType;
	}

	@Override
	public int hashCode() {
		return Objects.hash(reportId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Report other = (Report) obj;
		return Objects.equals(reportId, other.reportId);
	}
	


}
