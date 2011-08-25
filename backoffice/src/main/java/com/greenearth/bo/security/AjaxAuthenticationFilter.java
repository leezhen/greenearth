package com.greenearth.bo.security;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.web.filter.authc.AuthenticatingFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.greenearth.bo.utils.Struts2Utils;

@Component
public class AjaxAuthenticationFilter extends AuthenticatingFilter {
	
	@Autowired
	private LoginService loginService;

	@Override
	protected AuthenticationToken createToken(ServletRequest req,
			ServletResponse res) throws Exception {
		System.out.println("createToken");
		return null;
	}

	@Override
	protected boolean onAccessDenied(ServletRequest req, ServletResponse res)
			throws Exception {
		String username = req.getParameter("username");
		String password = req.getParameter("password");
		if (StringUtils.isNotBlank(username) && StringUtils.isNotBlank(password)) {
			LoginStatus status = loginService.login(username, password);
			Struts2Utils.renderJson((HttpServletResponse) res, status);
			return status.isLoggedIn();
		}
		
		return false;
	}

}
