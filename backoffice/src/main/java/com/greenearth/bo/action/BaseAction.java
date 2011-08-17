package com.greenearth.bo.action;

import java.io.IOException;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.common.io.CharStreams;
import com.greenearth.bo.mapper.JsonMapper;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class BaseAction extends ActionSupport implements ServletRequestAware,
		ServletResponseAware {
	protected final Logger logger = LoggerFactory.getLogger(getClass());
	protected int start = 0;
    protected int limit = 20;
    protected HttpServletResponse response;
	protected HttpServletRequest request;
	protected JsonMapper jsonMapper = JsonMapper.buildNormalMapper();
    
	@Override
	public void setServletResponse(HttpServletResponse response) {
		this.response = response;
	}

	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request = request;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}
	
	protected String getJson() {
		String str = null;
		try {
			str = CharStreams.toString(new InputStreamReader(request.getInputStream(), "UTF-8"));
		} catch (IOException e) {
			logger.warn("Error occured converting InputStream to String: ", e);
		}
		
		return str;
	}
}
