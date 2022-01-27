package com.medicalstoreapp.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.medicalstoreapp.dto.AddSupplyStockRequest;
import com.medicalstoreapp.dto.SuppliedStockDetails;
import com.medicalstoreapp.entity.SuppliedEntity;
import com.medicalstoreapp.exception.InvalidSupplierIdDetailsException;
import com.medicalstoreapp.exception.InvalidSupplierIdException;
import com.medicalstoreapp.exception.SuppliedStockNotFoundException;
import com.medicalstoreapp.repository.SuppliedRepository;
import com.medicalstoreapp.util.DateConverter;
import com.medicalstoreapp.util.SuppliedStockUtil;

@Transactional
@Service
public class SuppliedServiceImpl implements SuppliedService {


	@Autowired
	private SuppliedRepository suppliedStockRepo;

	@Autowired
	private SuppliedStockUtil suppliedStockUtil;

	@Autowired
	private DateConverter dateConverter;

	/**
	 * Adding Supplied Stock Details
	 */
	@Override
	public SuppliedStockDetails add(AddSupplyStockRequest request) {
		SuppliedEntity stock = new SuppliedEntity();
		stock.setStockId(request.getStockId());
		stock.setSupplierId(request.getSupplierId());
		stock.setStockName(request.getStockName());
		stock.setSuppliedDate(request.getSuppliedDate());
		stock.setUnits(request.getUnits());
		stock.setSuppliedCost(request.getSuppliedCost());
		stock = suppliedStockRepo.save(stock);
		return suppliedStockUtil.toDetails(stock);

	}
	public SuppliedEntity newSuppliedStock() {
		return new SuppliedEntity();
	}

	/**
	 * Finding Supplied Stock Details By supplier Id
	 */
	@Override
	public List<SuppliedStockDetails> findSuppliedStockDetailsBySupplierId(Long supplierId) {
		List<SuppliedEntity> suppliedStocks = suppliedStockRepo.findBySupplierId(supplierId);
		List<SuppliedStockDetails> desired = suppliedStockUtil.toDetailsList(suppliedStocks);
		if (desired == null) {
			throw new InvalidSupplierIdException(
					"Supplied Stock Details are not found for the given supplierId" + supplierId);

		}
		return desired;

	}

	/**
	 * Finding Supplied Stock Details Based on suppliedStockId
	 */

	@Override
	public SuppliedStockDetails findSuppliedStockDetailsById(Long suppliedStockId) {
		Optional<SuppliedEntity> optional = suppliedStockRepo.findById(suppliedStockId);
		if (!optional.isPresent()) {
			throw new SuppliedStockNotFoundException(
					"Supplied Stock is Not Found for the given suppliedId" + suppliedStockId);

		}

		SuppliedEntity stock = optional.get();
		return suppliedStockUtil.toDetails(stock);

	}

	/**
	 * Finding Supplied Stocks By a Supplier between Certain Dates
	 */
	@Override
	public List<SuppliedStockDetails> findSuppliedStocksBySupplierId(Long supplierId, String startDate,
			String endDate) {

		LocalDate startPeriod = dateConverter.toDate(startDate);
		LocalDate endPeriod = dateConverter.toDate(endDate);
		List<SuppliedEntity> details = suppliedStockRepo.findSuppliedStocksBySupplierId(supplierId, startPeriod,
				endPeriod);
		if (details == null) {
			throw new InvalidSupplierIdDetailsException(
					"Supplied Stock Details are not found for the given supplierId in the given range. Please check the Parameters entered");

		}

		return suppliedStockUtil.toDetailsList(details);
	}
	
	@Override
	public List<SuppliedStockDetails> fetchAllSuppliedStock(){
		List<SuppliedEntity> details = suppliedStockRepo.findAll();
		List<SuppliedStockDetails> desired = suppliedStockUtil.toDetailsList(details);
		
		return desired;
	}
	
	/*
	*
	delete a supplied stock By Id
	*/
	@Override
	public String deleteById(@NotNull @Min(1) Long Id) {
		suppliedStockRepo.deleteById(Id);
		return "Supplied Stock Deleted";
	}
	

}