package com.medicalstoreapp.reportms.service;

import java.time.LocalDate;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;

import com.medicalstoreapp.reportms.dto.CreateReportRequest;
import com.medicalstoreapp.reportms.dto.ReportDetails;

@Validated
public interface IReportService {

	ReportDetails generateReportInPeriod(@NotNull @Valid CreateReportRequest request);
	
	ReportDetails findReportDetailsById(@NotNull @Min(1) Long reportId);
	
	ReportDetails findReportByPeriod(@NotNull LocalDate startDate, @NotNull LocalDate endDate);
	
	List<ReportDetails> findAllReportsByReportType(@NotNull  String reportType);
	
	void deleteReportById(@NotNull @Min(1) Long reportId);
	
	List<ReportDetails> findAllReports();
}
