package com.medicalstoreapp.user.vo;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * 
 * @author pavan. Abhipsa
 *
 * Entity Class for Supplied Stock Module
 */

public class SuppliedEntity {
			
		
			private Long Id;
			private Long stockId;
			private String stockName;
			private Long supplierId;
			private LocalDate suppliedDate;
			private Double suppliedCost;
			private int units;
			
			public String getStockName() {
				return stockName;
			}
			public void setStockName(String stockName) {
				this.stockName = stockName;
			}
			
			public Long getId() {
				return Id;
			}
			public void setId(Long Id) {
				this.Id = Id;
			}
			
			public Long getStockId() {
				return stockId;
			}
			
			public void setStockId(Long stockId) {
				this.stockId = stockId;
			}
			public Long getSupplierId() {
				return supplierId;
			}

			public void setSupplierId(Long supplierId) {
				this.supplierId = supplierId;
			}
			public LocalDate getSuppliedDate() {
				return suppliedDate;
			}
			public void setSuppliedDate(LocalDate suppliedDate) {
				this.suppliedDate = suppliedDate;
			}
			public Double getSuppliedCost() {
					return suppliedCost;
			}
			public void setSuppliedCost(Double suppliedCost) {
				this.suppliedCost = suppliedCost;
			}
			public int getUnits() {
				return units;
			}
			public void setUnits(int units) {
				this.units = units;
			}
			
			@Override
			public int hashCode() {
				return Objects.hash(Id);
			}

			@Override	
			public boolean equals(Object obj) {
				if (this == obj)
					return true;
				if (obj == null)
					return false;
				if (getClass() != obj.getClass())
					return false;
				SuppliedEntity other = (SuppliedEntity) obj;
				return Objects.equals(Id, other.Id);
}

}