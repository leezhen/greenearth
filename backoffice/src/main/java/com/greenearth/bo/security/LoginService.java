package com.greenearth.bo.security;

public interface LoginService {

  LoginStatus getStatus();

  LoginStatus login(String username, String password);
}
