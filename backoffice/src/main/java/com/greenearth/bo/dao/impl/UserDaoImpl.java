/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package com.greenearth.bo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.greenearth.bo.dao.UserDao;
import com.greenearth.bo.dao.hibernate.HibernateDao;
import com.greenearth.bo.domain.User;

@Repository
public class UserDaoImpl extends HibernateDao<User, Long> implements UserDao {

    public User getUser(Long userId) {
        return get(userId);
    }

    public User findUser(String username) {
        return findUniqueBy("username", username);
    }

    public void createUser(User user) {
    	save(user);
    }

    public List<User> getAllUsers() {
        return getAll();
    }

    public void deleteUser(Long userId) {
    	delete(userId);
    }

    public void updateUser(User user) {
        save(user);
    }

}

