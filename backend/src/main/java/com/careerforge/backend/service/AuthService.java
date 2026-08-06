package com.careerforge.backend.service;


import com.careerforge.backend.dto.LoginRequest;
import com.careerforge.backend.dto.RegisterRequest;
import com.careerforge.backend.model.User;
import com.careerforge.backend.repository.UserRepository;
import org.springframework.stereotype.Service;


@Service
public class AuthService {


    private final UserRepository userRepository;


    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }



    public User register(RegisterRequest request) {


        User user = new User();

        user.setName(request.getName());

        user.setEmail(request.getEmail());

        user.setPassword(request.getPassword());


        return userRepository.save(user);

    }





    public User login(LoginRequest request) {


        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() -> 
                    new RuntimeException("User not found")
                );


        if(!user.getPassword().equals(request.getPassword())) {

            throw new RuntimeException("Invalid password");

        }


        return user;

    }


}