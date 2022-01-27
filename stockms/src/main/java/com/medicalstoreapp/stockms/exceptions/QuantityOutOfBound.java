package com.medicalstoreapp.stockms.exceptions;

public class QuantityOutOfBound extends RuntimeException{
	public QuantityOutOfBound(String msg)
	{
		super(msg);
	}
}
