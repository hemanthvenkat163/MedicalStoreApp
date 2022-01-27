/*package com.medicalstoreapp.reportms.manualtesting;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.medicalstoreapp.reportms.dto.CreateReportRequest;
import com.medicalstoreapp.reportms.dto.ReportDetails;
import com.medicalstoreapp.reportms.service.ReportServiceImpl;

@Component
public class ReportManualTesting {

	
	private static final Logger Log = LoggerFactory.getLogger(ReportManualTesting.class);
	
	
	@Autowired
	private ReportServiceImpl service;
	
	
	public void run()
	{
		generate();
		find();
	}
	
	
	public void generate()
	{
		CreateReportRequest request = new CreateReportRequest();
		request.setStartPeriod("06-01-2022");
		request.setEndPeriod("06-06-2022");
		ReportDetails details = service.generateReportInPeriod(request);
		if(details != null)
		{
			Log.info(details.toString());
		}
	}
	
	
	private void find() {
		ReportDetails details  = service.findReportDetailsById(1l);
		if(details != null)
		{
			Log.info(details.toString());
		}
	}
}*/
