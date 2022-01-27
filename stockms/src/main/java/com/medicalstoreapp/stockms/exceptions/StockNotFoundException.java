package com.medicalstoreapp.stockms.exceptions;

public class StockNotFoundException extends RuntimeException{
	public StockNotFoundException(String msg)
	{
		super(msg);
	}

}
