package com.careerforge.backend.controller;


import com.careerforge.backend.dto.LoginRequest;
import com.careerforge.backend.dto.RegisterRequest;
import com.careerforge.backend.model.User;
import com.careerforge.backend.service.AuthService;

import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {


    private final AuthService authService;



    public AuthController(AuthService authService) {

        this.authService = authService;

    }





    @PostMapping("/register")
    public User register(
            @RequestBody RegisterRequest request
    ){

        return authService.register(request);

    }






    @PostMapping("/login")
    public User login(
            @RequestBody LoginRequest request
    ){

        return authService.login(request);

    }


}