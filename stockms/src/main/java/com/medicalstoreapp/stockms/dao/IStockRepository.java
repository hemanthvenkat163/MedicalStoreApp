package com.medicalstoreapp.stockms.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.medicalstoreapp.stockms.entities.Stock;

@Repository
public interface IStockRepository extends JpaRepository<Stock, Long> {

	Stock findStockByStockName(String stockName);

	boolean existsByStockName(String stockName);

}
