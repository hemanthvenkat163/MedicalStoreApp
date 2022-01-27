package com.medicalstoreapp.reportms.controller;

import java.time.format.DateTimeParseException;

import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.medicalstoreapp.reportms.exceptions.InvalidDatesException;
import com.medicalstoreapp.reportms.exceptions.InvalidEndDateException;
import com.medicalstoreapp.reportms.exceptions.ReportNotFoundException;

@RestControllerAdvice
public class CentralizedExceptionHandler {
	
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(InvalidDatesException.class)
    public String handleInvalidDatesException(InvalidDatesException e){
        return e.getMessage();
    }
	

	@ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(InvalidEndDateException.class)
    public String handleInvalidEndDateException(InvalidEndDateException e){
        return e.getMessage();
    }
	
	
	@ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ReportNotFoundException.class)
    public String handleReportNotFoundException(ReportNotFoundException e) {
        return e.getMessage();
    }
	
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ConstraintViolationException.class)
    public String handleConstraintViolationException(ConstraintViolationException e){
        return e.getMessage();
    }
    
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(DateTimeParseException.class)
    public String handleDateTimeParseException(DateTimeParseException e){
        return e.getMessage();
    }
}
