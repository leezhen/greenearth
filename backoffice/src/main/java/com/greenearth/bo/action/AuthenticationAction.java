package com.greenearth.bo.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.greenearth.bo.security.LoginService;
import com.greenearth.bo.utils.Struts2Utils;

@SuppressWarnings("serial")
@Component
@Scope("prototype")
public class AuthenticationAction extends BaseAction {
	@Autowired
	private LoginService loginService;
	
	public void isAuthenticated() {
		Struts2Utils.renderJson(loginService.getStatus());
	}
}
