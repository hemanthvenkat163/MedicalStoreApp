package com.medicalstoreapp.stockms.service;

import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import org.springframework.validation.annotation.Validated;
import com.medicalstoreapp.stockms.dto.CreateStockRequest;
import com.medicalstoreapp.stockms.dto.StockDetails;
import com.medicalstoreapp.stockms.dto.UpdateQuantity;
import com.medicalstoreapp.stockms.entities.Stock;
import com.medicalstoreapp.stockms.exceptions.StockNotFoundException;

@Validated
public interface IStockService {
	StockDetails add(@NotNull @Valid CreateStockRequest request);

	StockDetails increaseQuantity(@NotNull @Valid UpdateQuantity quantity);

	StockDetails decreaseQuantity(@NotNull @Valid UpdateQuantity quantity);

	List<Stock> getAllStock();

	void deleteByStockId(@NotNull @Min(1) Long stockId);

	StockDetails findByStockId(@Min(1) Long id);

}
