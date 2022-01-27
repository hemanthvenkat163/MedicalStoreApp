package com.medicalstoreapp.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.medicalstoreapp.entity.SuppliedEntity;
/**
 * 
 * @author pavan, Abhipsa
 * 
 * Interface Repository for suppliedStockModule
 *
 */
public interface SuppliedRepository extends JpaRepository<SuppliedEntity, Long>{

	List<SuppliedEntity> findBySupplierId(Long supplierId);


	@Query("FROM SuppliedEntity where suppliedDate between :startDate and :endDate")
	List<SuppliedEntity> findInPeriod(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

	@Query("FROM SuppliedEntity where supplierId = :supplierId and suppliedDate between :startDate and :endDate")
	List<SuppliedEntity> findSuppliedStocksBySupplierId(@Param("supplierId") Long supplierId,
			@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
	
	

}

