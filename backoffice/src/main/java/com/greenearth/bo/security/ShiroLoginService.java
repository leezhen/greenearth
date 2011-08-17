package com.greenearth.bo.security;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service("shiroLoginService")
public class ShiroLoginService implements LoginService {
    private Logger log = LoggerFactory.getLogger(ShiroLoginService.class);

    public LoginStatus getStatus() {
        Subject currentUser = SecurityUtils.getSubject();
        if (currentUser.isAuthenticated()) {
            return new LoginStatus(true, currentUser.getPrincipal().toString());
        } else {
            return new LoginStatus(false, null);
        }
    }

    public LoginStatus login(String username, String password) {
        if (!getStatus().isLoggedIn()) {
            UsernamePasswordToken token = new UsernamePasswordToken(username, password);
            //this is all you have to do to support 'remember me' (no config - built in!):
            token.setRememberMe(true);
            Subject currentUser = SecurityUtils.getSubject();
            try {
                currentUser.login(token);
                log.debug("Login succeeded!");
                return new LoginStatus(currentUser.isAuthenticated(),
                        currentUser.getPrincipal().toString());
            } catch (AuthenticationException e) {
                return new LoginStatus(false, null);
            }

        } else {
            return getStatus();
        }
    }
}
