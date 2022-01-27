package com.medicalstoreapp.service;

import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;

import com.medicalstoreapp.dto.AddSupplyStockRequest;
import com.medicalstoreapp.dto.SuppliedStockDetails;

/**
 * 
 * @author pavan , Abhipsa
 *
 *         Interface Class for Supplied Stock Module
 */
@Validated
public interface SuppliedService {
	SuppliedStockDetails add(@NotNull @Valid AddSupplyStockRequest request);

	List<SuppliedStockDetails> findSuppliedStockDetailsBySupplierId(@Min(1) Long supplierId);

	SuppliedStockDetails findSuppliedStockDetailsById(@Min(1) Long suppliedStockId);

	List<SuppliedStockDetails> findSuppliedStocksBySupplierId(@Min(1) Long supplierId, @NotBlank String startDate,
			@NotBlank String endDate);

	List<SuppliedStockDetails> fetchAllSuppliedStock();

	String deleteById(@NotNull @Min(1) Long Id);

}