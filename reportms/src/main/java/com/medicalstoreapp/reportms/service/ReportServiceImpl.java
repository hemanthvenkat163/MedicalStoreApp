package com.medicalstoreapp.reportms.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.medicalstoreapp.reportms.constants.ReportType;
import com.medicalstoreapp.reportms.dao.IReportRepository;
import com.medicalstoreapp.reportms.dto.CreateReportRequest;
import com.medicalstoreapp.reportms.dto.ReportDetails;
import com.medicalstoreapp.reportms.entities.Report;
import com.medicalstoreapp.reportms.exceptions.InvalidDatesException;
import com.medicalstoreapp.reportms.exceptions.InvalidEndDateException;
import com.medicalstoreapp.reportms.exceptions.ReportNotFoundException;
import com.medicalstoreapp.reportms.util.DateConverter;
import com.medicalstoreapp.reportms.util.ReportUtil;

@Transactional
@Service
public class ReportServiceImpl implements IReportService{

	@Autowired
	private DateConverter dateConverter;
	
	@Autowired
	private ReportUtil reportUtil;
	
	@Autowired
	private IReportRepository reportRepo;
	
	@Override
	public ReportDetails generateReportInPeriod(@NotNull @Valid CreateReportRequest request) {
		
		validateDates(request.getStartPeriod(),request.getEndPeriod());
		Report report = new	Report();
//		LocalDate startDate = request.getStartPeriod();
//		LocalDate endDate = request.getEndPeriod();
		report.setStartPeriod(request.getStartPeriod());																			
		report.setEndPeriod(request.getEndPeriod());
		report.setCreatedDate(currentDate());
		ReportType reportType = getReportType(request.getStartPeriod(),request.getEndPeriod());
		report.setReportType(reportType);
		Set<Long> orders = reportUtil.fetchOrdersId(request.getStartPeriod(),request.getEndPeriod()); 
		report.setOrders(orders);
		report  = reportRepo.save(report);
		return reportUtil.toReportDetails(report);
	}
	
	
	public LocalDate currentDate()
	{
		return LocalDate.now();
	}
	
	
	/**
	 * creating new report object
	 * @return
	 */
	public Report newReport()
	{
		return new Report();
	}
	
	public void validateDates(LocalDate startDate, LocalDate endDate) 
	{
		
//	    LocalDate startDate = dateConverter.toDate(startDateText);
//	    LocalDate endDate = dateConverter.toDate(endDateText);
	
	
	    if(endDate.isBefore(startDate))
	    {
	    	throw new InvalidEndDateException("EndDate should not be the earliest date than startDate");
	    }
	    
	    if(endDate.equals(startDate))
	    {
	    	throw new InvalidDatesException("Both dates should not be same ");
	    }
    }
	
	
	public ReportType getReportType(LocalDate startDate, LocalDate endDate)
	{
		int months = dateConverter.months(startDate, endDate);
		if(months == 1)
		{
			return ReportType.MONTHLY;
		}
		if(months>1 && months<=4)
		{
			return ReportType.QUARTERLY;
		}
		if(months>4 && months<=6)
		{
			return ReportType.HALFYEARLY;
		}
		return ReportType.YEARLY;
	}


	@Override
	public ReportDetails findReportDetailsById(@NotNull @Min(1) Long reportId) {
		Report report = findById(reportId);
		return reportUtil.toReportDetails(report);
	}
	
	public Report findById(Long reportId) {
		Optional<Report> optional = reportRepo.findById(reportId);// find the report in the database
		if (!optional.isPresent()) {
			throw new ReportNotFoundException("Report Not Found of id:" + reportId);
		}
		return optional.get();
	}


	@Override
	public ReportDetails findReportByPeriod(@NotNull LocalDate startDate, @NotNull LocalDate endDate) 
	{
		 validateDates(startDate,endDate);
		 LocalDate startPeriod  = startDate;
		 LocalDate endPeriod = endDate;
		 
		 Report reportInPeriod  = reportRepo.findReportByPeriod(startPeriod, endPeriod);
		 if(reportInPeriod == null)
		 {
			 throw new ReportNotFoundException("Report not found in the given period");
		 }
		 return reportUtil.toReportDetails(reportInPeriod);
	}


	@Override
	public List<ReportDetails> findAllReportsByReportType(@NotNull String reportType)
	{
		String upperCase = reportType.toUpperCase();
		ReportType report  = ReportType.valueOf(upperCase);
		List<Report> reports = reportRepo.findAllReportsByReportType(report);
		if(reports.isEmpty())
		{
			throw new ReportNotFoundException("Report not found for the report type");
		}
		return reportUtil.toReportDetailsList(reports);
	}
	
	@Override
	public void deleteReportById(@NotNull @Min(1) Long reportId) {
		Report report = findById(reportId);
		if(report==null)
		{
			throw new ReportNotFoundException("Report is not found for the report id");
		}
		reportRepo.deleteById(reportId);
	}


	@Override
	public List<ReportDetails> findAllReports() 
	{
		List<Report> reports = reportRepo.findAll();
		return reportUtil.toReportDetailsList(reports);
	}


	

}
