package com.medicalstoreapp.user.request;

import java.time.LocalDate;

public class CreateReportRequest {

	private LocalDate startPeriod;

	private LocalDate endPeriod;

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

}
