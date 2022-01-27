package com.medicalstoreapp.user.entity;

import java.util.List;

public class JwtResponse {

	private User user;
	private List<String> userRole;
	private String jwtToken;

	public User getUser() {
		return user;
	}

	public List<String> getUserRole() {
		return userRole;
	}

	public void setUserRole(List<String> userRole) {
		this.userRole = userRole;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

	public JwtResponse(User user, List<String> userRole, String jwtToken) {
		super();
		this.user = user;
		this.userRole = userRole;
		this.jwtToken = jwtToken;
	}
	
}
