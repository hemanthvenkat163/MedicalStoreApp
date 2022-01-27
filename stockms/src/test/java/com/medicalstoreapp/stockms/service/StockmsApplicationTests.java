package com.medicalstoreapp.stockms.service;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import com.medicalstoreapp.stockms.dao.IStockRepository;
import com.medicalstoreapp.stockms.dto.CreateStockRequest;
import com.medicalstoreapp.stockms.dto.StockDetails;
import com.medicalstoreapp.stockms.dto.UpdateQuantity;
import com.medicalstoreapp.stockms.entities.Stock;
import com.medicalstoreapp.stockms.exceptions.QuantityOutOfBound;
import com.medicalstoreapp.stockms.exceptions.StockNotFoundException;
import com.medicalstoreapp.stockms.util.StockUtil;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

//@SpringBootTest
@ExtendWith(MockitoExtension.class)
class StockmsApplicationTests {
	@Mock
	private IStockRepository stockRepo;

	@Mock
	private StockUtil stockUtil;

	@InjectMocks
	@Spy
	private StockServiceImpl stockService;

	/**
	 * 
	 * Testing for add stock method
	 * 
	 */
	@Test
	public void addTest() {
		CreateStockRequest request = new CreateStockRequest();
		request.setStockName("Dolo67");
		request.setUnits(10);
		request.setPrice(100);
		Stock stock = mock(Stock.class);
		doReturn(stock).when(stockService).newStock();
		when(stockRepo.save(stock)).thenReturn(stock);
		StockDetails stockDetails = mock(StockDetails.class);
		when(stockUtil.toDetails(stock)).thenReturn(stockDetails);
		StockDetails result = stockService.add(request);
		assertEquals(stockDetails, result);
		verify(stockRepo).save(stock);
		verify(stockUtil).toDetails(stock);
	}

	/**
	 * 
	 * Testing for increaseQuantity method
	 * 
	 */
	@Test
	public void increaseQuantity() throws StockNotFoundException {

		UpdateQuantity request = new UpdateQuantity();
		request.setStockName("Dell");
		request.setUnits(10);
		Stock stock = new Stock();
		doNothing().when(stockService).validateStockExistByName(request.getStockName());
		doReturn(stock).when(stockRepo).findStockByStockName(request.getStockName());
		StockDetails stockDetails = mock(StockDetails.class);
		when(stockRepo.save(stock)).thenReturn(stock);
		when(stockUtil.toDetails(stock)).thenReturn(stockDetails);
		StockDetails result = stockService.increaseQuantity(request);
		assertEquals(stockDetails, result);
	}

	/**
	 * 
	 * Testing for Decrease Quantity method
	 * 
	 * @throws QuantityOutOfBound
	 */

	@Test
	public void decreaseQuantity() throws StockNotFoundException, QuantityOutOfBound {

		UpdateQuantity request = new UpdateQuantity();
		request.setStockName("Dolo67");
		request.setUnits(10);
		Stock stock = new Stock();
		doNothing().when(stockService).validateStockExistByName(request.getStockName());
		doReturn(stock).when(stockRepo).findStockByStockName(request.getStockName());
		doNothing().when(stockService).validateQuantityBound(request.getUnits(), stock);
		StockDetails stockDetails = mock(StockDetails.class);
		when(stockRepo.save(stock)).thenReturn(stock);
		when(stockUtil.toDetails(stock)).thenReturn(stockDetails);
		StockDetails result = stockService.decreaseQuantity(request);
		assertEquals(stockDetails, result);

	}

}
