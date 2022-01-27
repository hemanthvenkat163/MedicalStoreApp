package com.medicalstoreapp.user.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.medicalstoreapp.user.entity.JwtRequest;
import com.medicalstoreapp.user.entity.JwtResponse;
import com.medicalstoreapp.user.entity.User;
import com.medicalstoreapp.user.exception.InvalidCredentailsException;
import com.medicalstoreapp.user.repository.IUserRepository;
import com.medicalstoreapp.user.util.JwtUtil;

@Service("jwtService")
public class JwtService implements UserDetailsService {

	private static final String USERNAME_NOT_FOUND = "user not found  userName=";

	@Autowired
	private IUserRepository userRepository;

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private BCryptPasswordEncoder encoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUserName(username);

		if (user != null) {
			/*
			 * return new org.springframework.security.core.userdetails.User(
			 * user.getUserName(), user.getPassword(), getAuthority(user) );
			 */
			// return user.getUserName();
			return new CustomUserDetails(user);
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}

	public JwtResponse generateToken(JwtRequest jwtRequest) throws InvalidCredentailsException {
		User user = userRepository.findById(jwtRequest.getUserName()).get();
		if (user == null) {
			throw new InvalidCredentailsException(USERNAME_NOT_FOUND + " " + jwtRequest.getUserName());
		}
		if (!encoder.matches(jwtRequest.getPassword(), user.getPassword())) {
			throw new InvalidCredentailsException("Invalid Password for username = " + jwtRequest.getUserName());
		}
		if (encoder.matches(jwtRequest.getPassword(), user.getPassword())
				&& user.getUserName().equals(jwtRequest.getUserName())) {
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(jwtRequest.getUserName(), jwtRequest.getPassword()));
			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtil.generateToken(jwtRequest.getUserName());
			CustomUserDetails userDetail = (CustomUserDetails) authentication.getPrincipal();
			List<String> role = userDetail.getAuthorities().stream().map(item -> item.getAuthority())
					.collect(Collectors.toList());
			JwtResponse jwtResponse = new JwtResponse(user, role, jwt);
			return jwtResponse;

		} else {
			throw new InvalidCredentailsException(USERNAME_NOT_FOUND + " " + jwtRequest.getUserName());
		}
	}

	/*
	 * private Set getAuthority(User user) { Set<SimpleGrantedAuthority> authorities
	 * = new HashSet<>(); user.getRole().forEach(role -> { authorities.add(new
	 * SimpleGrantedAuthority("ROLE_" + role.getRoleName())); }); return
	 * authorities; }
	 */

	/*
	 * public JwtResponse createJwtToken(JwtRequest jwtRequest) throws Exception {
	 * String userName=jwtRequest.getUserName(); String
	 * password=jwtRequest.getPassword(); authenticate(userName,password);
	 * 
	 * String userName = loadUserByUsername(extractUsername); String
	 * newGeneratedToken = jwtUtil.generateToken(userDetails);
	 * 
	 * User user = userRepository.findById(userName).get(); return new
	 * JwtResponse(user, newGeneratedToken);
	 * 
	 * }
	 * 
	 * 
	 * private void authenticate(String userName, String password) throws Exception
	 * { try { authenticationManager.authenticate(new
	 * UsernamePasswordAuthenticationToken(userName,password)); } catch
	 * (DisabledException e) { throw new Exception("USER_DISABLED", e); } catch
	 * (BadCredentialsException e) { throw new Exception("INVALID_CREDENTIALS", e);
	 * }
	 * 
	 * }
	 */

}
