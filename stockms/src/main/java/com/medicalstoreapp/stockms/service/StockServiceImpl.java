package com.medicalstoreapp.stockms.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.medicalstoreapp.stockms.dao.IStockRepository;
import com.medicalstoreapp.stockms.dto.CreateStockRequest;
import com.medicalstoreapp.stockms.dto.StockDetails;
import com.medicalstoreapp.stockms.dto.UpdateQuantity;
import com.medicalstoreapp.stockms.entities.Stock;
import com.medicalstoreapp.stockms.exceptions.QuantityOutOfBound;
import com.medicalstoreapp.stockms.exceptions.StockNotFoundException;
import com.medicalstoreapp.stockms.util.StockUtil;

@Transactional
@Service
public class StockServiceImpl implements IStockService {
	@Autowired
	private IStockRepository stockRepo;

	@Autowired
	private StockUtil stockUtil;

	/*
	 * Add stocks into database
	 */

	public StockDetails add(CreateStockRequest request) {
		Stock stock = newStock();
		stock.setStockName(request.getStockName());
		stock.setUnits(request.getUnits());
		stock.setPrice(request.getPrice());
		stock = stockRepo.save(stock);
		return stockUtil.toDetails(stock);
	}

	public Stock newStock() {
		return new Stock();
	}

	/*
	 * Increase the quantity of Available Stocks in database
	 */

	public StockDetails increaseQuantity(UpdateQuantity updateRequest) {
		String stockName = updateRequest.getStockName();
		validateStockExistByName(stockName);
		Stock stock = stockRepo.findStockByStockName(updateRequest.getStockName());
		int unit = updateRequest.getUnits();
		stock.setUnits(stock.getUnits() + unit);
		stock = stockRepo.save(stock);
		return stockUtil.toDetails(stock);

	}

	void validateQuantityBound(int unit, Stock stock) {
		if (unit > stock.getUnits()) {
			throw new QuantityOutOfBound("The given Quantity is larger than the available.");

		}
	}

	void validateStockExistByName(String stockName) {
		boolean exist = stockRepo.existsByStockName(stockName);
		if (!exist) {
			throw new StockNotFoundException("The Given Name is not found :" + stockName);
		}
	}

	/*
	 * Decreases the Quantity of Available stock in the database
	 */

	@Override
	public StockDetails decreaseQuantity(UpdateQuantity updateRequest) {
		validateStockExistByName(updateRequest.getStockName());
		Stock stock = stockRepo.findStockByStockName(updateRequest.getStockName());
		int unit = updateRequest.getUnits();
		validateQuantityBound(unit, stock);
		stock.setUnits(stock.getUnits() - unit);
		stock = stockRepo.save(stock);
		return stockUtil.toDetails(stock);
	}

	/*
	 * Gives all the stocks Available in the database
	 */

	@Override
	public List<Stock> getAllStock() {
		return stockRepo.findAll();
	}

	/*
	 * Delete a Particular Stock with the help of StockId
	 */

	@Override
	public void deleteByStockId(@NotNull @Min(1) Long stockId) {

		stockRepo.deleteById(stockId);

	}

	public Stock findById(Long stockId) {
		Optional<Stock> optional = stockRepo.findById(stockId);// find the stock in the database
		if (!optional.isPresent()) {
			throw new StockNotFoundException("Stock Not Found of id:" + stockId);
		}
		return optional.get();
	}

	/*
	 * Gives the details of Stock based on StockId
	 */

	@Override
	public StockDetails findByStockId(@Min(1) Long id) {
		Stock stock = findById(id);
		return stockUtil.toDetails(stock);
	}

}
