package com.medicalstoreapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.medicalstoreapp.dto.AddSupplyStockRequest;
import com.medicalstoreapp.dto.SuppliedStockDetails;
import com.medicalstoreapp.service.SuppliedService;

/*
 * Author-Pavan, Abhipsa
 * 
 * Controller  
 */


//@CrossOrigin(origins = {"http://localhost:3000/"})
@CrossOrigin("*")
@RequestMapping("/suppliedstockms")
@RestController
public class SuppliedController {

	@Autowired
	private SuppliedService service;

	@ResponseStatus(HttpStatus.CREATED)

	@PostMapping("/AddSupplyStockRequest")
	public SuppliedStockDetails add(@RequestBody AddSupplyStockRequest requestData) {
		SuppliedStockDetails response = service.add(requestData);
		return response;

	}
	
	
	@GetMapping("/findBySupplierId/{supplierId}")
	public List<SuppliedStockDetails> fetchSuppliedStockDetailsBySupplierId(@PathVariable("supplierId")Long supplierId) {
		List<SuppliedStockDetails> response = service.findSuppliedStockDetailsBySupplierId(supplierId);
		return response;
	}

	@GetMapping("/findById/{id}")
	public SuppliedStockDetails fetchSuppliedStockDetailsById(@PathVariable("id") Long id) {
		SuppliedStockDetails response = service.findSuppliedStockDetailsById(id);
		return response;
	}

	@GetMapping("/findSuppliedStockDetailsBySupplierId/{supplierId}/{startDate}/{endDate}")
	public List<SuppliedStockDetails> fetchSuppliedStockDetailsBySupplierId(@PathVariable("supplierId") Long supplierId,
			@PathVariable("startDate") String startDate, @PathVariable("endDate") String endDate) {
		List<SuppliedStockDetails> response = service.findSuppliedStocksBySupplierId(supplierId, startDate, endDate);
		return response;
	}
	
	@GetMapping("/findAllSuppliedStock")
	public List<SuppliedStockDetails> fetchAllSuppliedStock(){
		List<SuppliedStockDetails> response = service.fetchAllSuppliedStock();
		return response;
	}
	
	@DeleteMapping("/ById/{Id}")
	public String deleteById(@PathVariable("Id") Long Id) {
		return service.deleteById(Id);
	}
	

}