package com.medicalstoreapp.controller;

import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;


import com.medicalstoreapp.exception.InvalidSupplierIdDetailsException;
import com.medicalstoreapp.exception.InvalidSupplierIdException;

import com.medicalstoreapp.exception.SuppliedStockNotFoundException;

@RestControllerAdvice
public class CentralizedExceptionHandler {
	
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(SuppliedStockNotFoundException.class)
	public String handleSuppliedStockNotFoundException(SuppliedStockNotFoundException e) {
		return e.getMessage();
	}


		@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(InvalidSupplierIdException.class)
	public String handleInvalidSupplierException(InvalidSupplierIdException e) {
		return e.getMessage();
	}
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(InvalidSupplierIdDetailsException.class)
	public String handleInvalidSupplierIdDetailsException(InvalidSupplierIdDetailsException e) {
		return e.getMessage();
	}

	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ConstraintViolationException.class)
    public String handleConstraintViolationException(ConstraintViolationException e){
        return e.getMessage();
    }
}

