package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.security.LoginService;
import com.greenearth.bo.security.LoginStatus;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class AuthenticationAction extends BaseAction {
	@Autowired
	private LoginService loginService;
	
	private String username;
	
	private String password;
	
	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void isAuthenticated() {
		Struts2Utils.renderJson(loginService.getStatus());
	}
	
	public void login() {
		LoginStatus status = loginService.login(username, password);
		Struts2Utils.renderJson(status);
	}
}
