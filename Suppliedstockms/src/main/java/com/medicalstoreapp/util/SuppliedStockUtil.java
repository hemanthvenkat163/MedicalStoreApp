package com.medicalstoreapp.util;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.medicalstoreapp.dto.SuppliedStockDetails;
import com.medicalstoreapp.entity.SuppliedEntity;
/**
 * 
 * @author pavan
 * Util Class for SuppliedStockDetails Module
 */

@Component
public class SuppliedStockUtil {
	
	

	public SuppliedStockDetails toDetails(SuppliedEntity stock) {
		SuppliedStockDetails response = new SuppliedStockDetails();
		response.setId(stock.getId());
		response.setStockId(stock.getStockId());
		response.setStockName(stock.getStockName());
		response.setSuppliedCost(stock.getSuppliedCost());
		response.setSupplierId(stock.getSupplierId());
		response.setUnits(stock.getUnits());
		response.setSuppliedDate(stock.getSuppliedDate());

		return response;

	}

	public List<SuppliedStockDetails> toDetailsList(Collection<SuppliedEntity> suppliedStock) {

		return suppliedStock.stream().map(n -> toDetails(n)).collect(Collectors.toList());
	}

}