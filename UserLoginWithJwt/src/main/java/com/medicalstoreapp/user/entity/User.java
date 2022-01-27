package com.medicalstoreapp.user.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="UserService")
public class User {
	
	@Id
	private String userName;
	@Column(nullable=false)
	private String firstName;
	@Column(nullable=false)
	private String lastName;
	@Column(nullable=false)
	private String email;
	@Column(nullable=false)
	private int age;
	
	private String password;
	/*
	 * @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	 * 
	 * @JoinTable(name = "USER_ROLE", joinColumns = {
	 * 
	 * @JoinColumn(name = "USER_ID") }, inverseJoinColumns = {
	 * 
	 * @JoinColumn(name = "ROLE_ID") } )
	 */
	private String role;
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	/**
	 * @return the age
	 */
	public int getAge() {
		return age;
	}
	/**
	 * @param age the age to set
	 */
	public void setAge(int age) {
		this.age = age;
	}
}
