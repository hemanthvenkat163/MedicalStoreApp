package com.medicalstoreapp.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.medicalstoreapp.user.entity.Role;

@Repository("roleRepository")
public interface IRoleRepository extends JpaRepository<Role,String> {

}
