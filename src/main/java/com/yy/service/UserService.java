package com.yy.service;

import com.yy.po.User;

public interface UserService {

    User checkUser(String username, String password);

}
