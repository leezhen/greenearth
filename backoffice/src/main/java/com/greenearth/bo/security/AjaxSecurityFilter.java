package com.greenearth.bo.security;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.filter.OncePerRequestFilter;

import com.greenearth.bo.utils.Struts2Utils;

public class AjaxSecurityFilter extends OncePerRequestFilter {
	private Logger logger = LoggerFactory.getLogger(getClass());
    private Map<String, String> _ajaxRequestTokens = new HashMap<String, String>();
    
    /**
     * Configures the name/value pair of tokens that can be applied to the request header to
     * indicate the the current request is an ajax request.  These are applied to the init-params
     * of the filter configuration in the web.xml file, and have the following form:
     * <code>
     * <init-param>
     * <param-name>ajaxRequestTokens</param-name>
     * <param-value>X-Requested-With=XMLHttpRequest,DwrRequest=AJAX</param-value>
     * </init-param>
     * </code>
     * This configuration tests the request for 2 header names: 'X-Requested-With' and 'DwrRequest'.
     * If either header name exists and contains the corresponding value, this request is
     * determined to be an ajax request.
     *
     * @param ajaxRequestTokens a string containing name/value pairs separated by commas.  Each pair is
     *                          of the form: "name=value".
     */
    public void setAjaxRequestTokens(String ajaxRequestTokens) {
        if (ajaxRequestTokens != null) {
            String[] tokens = ajaxRequestTokens.split(",");
            for (String token : tokens) {
                if (token.contains("=")) {
                    String[] pairs = token.split("=");
                    if (pairs.length == 2) {
                        _ajaxRequestTokens.put(StringUtils.strip(pairs[0]), StringUtils.strip(pairs[1]));
                    }
                }
            }
        }
    }

    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        if (!isAjaxRequest(request)) {
            filterChain.doFilter(request, response);
            return;
        }

        logger.debug("AjaxSecurityFilter: Processing an AJAX call : " + request.getRequestURL());
        
        RedirectResponseWrapper redirectResponseWrapper = new RedirectResponseWrapper(response);

        filterChain.doFilter(request, redirectResponseWrapper);

        if (redirectResponseWrapper.getRedirect() != null) {
            String redirectURL = redirectResponseWrapper.getRedirect();
            if (redirectURL.indexOf("login") != -1) {
                // populate your reply in this case the json object
                // with what ever information needed to pop up your login window
            	LoginStatus status = new LoginStatus(false, null);
            	Struts2Utils.renderJson(response, status);
            }
            /// your auth is successful the call is successful
            else {
                // you can return the user name and password in the reply  so it can be displayed for example in you app
            	Subject currentUser = SecurityUtils.getSubject();
            	if (currentUser != null && currentUser.isAuthenticated()) {
                    LoginStatus status = new LoginStatus(currentUser.isAuthenticated(),
                            currentUser.getPrincipal().toString());
                    Struts2Utils.renderJson(response, status);
            	}
            }
        }
    }


    /**
     * @param request the request object
     * @return true if this request is an ajax request.  This is determined by a configured
     *         name/value pair that is applied to the request header
     */
    protected boolean isAjaxRequest(HttpServletRequest request) {
        // test with our ajax request pairs
        Set<String> keys = _ajaxRequestTokens.keySet();
        for (String key : keys) {
            String value = _ajaxRequestTokens.get(key);
            if (value.equalsIgnoreCase(request.getHeader(key))) return true;
        }
        return false;
    }
}