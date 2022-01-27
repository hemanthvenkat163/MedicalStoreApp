package com.medicalstoreapp.stockms.util;

import org.springframework.stereotype.Component;
import com.medicalstoreapp.stockms.dto.StockDetails;
import com.medicalstoreapp.stockms.entities.Stock;

@Component
public class StockUtil {

	public StockDetails toDetails(Stock stock) {
		StockDetails stockDetails = new StockDetails();
		stockDetails.setStockId(stock.getStockId());
		stockDetails.setStockName(stock.getStockName());
		stockDetails.setUnits(stock.getUnits());
		stockDetails.setPrice(stock.getPrice());
		return stockDetails;
	}

}
