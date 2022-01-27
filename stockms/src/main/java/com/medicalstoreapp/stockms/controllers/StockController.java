package com.medicalstoreapp.stockms.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.medicalstoreapp.stockms.dto.CreateStockRequest;
import com.medicalstoreapp.stockms.dto.StockDetails;
import com.medicalstoreapp.stockms.dto.UpdateQuantity;
import com.medicalstoreapp.stockms.entities.Stock;
import com.medicalstoreapp.stockms.service.StockServiceImpl;

@RequestMapping("/stocks")
@RestController
@CrossOrigin("*")
public class StockController {

	@Autowired
	private StockServiceImpl service;

	@PostMapping("/add")
	public StockDetails createStock(@RequestBody CreateStockRequest request) {
		return service.add(request);
	}

	@PutMapping("/increaseQuantity")
	public StockDetails increaseQuantity(@RequestBody UpdateQuantity quantity) {
		return service.increaseQuantity(quantity);
	}

	@PutMapping("/decreaseQuantity")
	public StockDetails decreaseQuantity(@RequestBody UpdateQuantity quantity) {
		return service.decreaseQuantity(quantity);
	}

	@GetMapping("/all")
	public List<Stock> fetchAll() {
		return service.getAllStock();
	}

	@GetMapping("/bystockid/{id}")
	public StockDetails findByStockId(@PathVariable("id") Long stockId) {
		return service.findByStockId(stockId);
	}

	@DeleteMapping("/delete/bystockid/{id}")
	public String deleteBloodRequest(@PathVariable("id") Long id) {
		service.deleteByStockId(id);
		return "Stock with Id " + id + " is deleted";
	}
}
