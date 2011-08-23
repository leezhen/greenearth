package com.greenearth.bo.security;

public class LoginStatus {

    private final boolean loggedIn;
    private final String username;
    private boolean success;

    public LoginStatus(boolean loggedIn, String username) {
        this.loggedIn = loggedIn;
        this.success = loggedIn;
        this.username = username;
    }

    public boolean isLoggedIn() {
        return loggedIn;
    }

    public String getUsername() {
        return username;
    }

	public boolean isSuccess() {
		return success;
	} 
}