package com.charmbackend.backend.controllers;

import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import static org.springframework.http.ResponseEntity.status;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.charmbackend.backend.dto.AuthResponse;
import com.charmbackend.backend.dto.LoginRequest;
import com.charmbackend.backend.dto.SignupRequest;
import com.charmbackend.backend.services.AuthService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired private AuthService authService;

    @PostMapping("/signup")
public ResponseEntity<?> signup(@Valid @RequestBody SignupRequest req, BindingResult bindingResult) {
    System.out.println("Signup request received: " + req.getName() + ", " + req.getEmail());

    if (bindingResult.hasErrors()) {
        Map<String, String> errors = bindingResult.getFieldErrors().stream()
            .collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));

        System.out.println("Validation errors: " + errors);
        return ResponseEntity.badRequest().body(errors);
    }
    try {
        AuthResponse authResponse = authService.signup(req);
        return ResponseEntity.ok(authResponse);
    } catch (RuntimeException e){
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(Map.of("error", e.getMessage()));
    }
}

@PostMapping("/login")
public ResponseEntity<?> login(@Valid @RequestBody LoginRequest req) {
    try {
        AuthResponse authResponse = authService.login(req);
        return ResponseEntity.ok(authResponse);
    } catch (RuntimeException e) {
        return status(HttpStatus.UNAUTHORIZED)
            .body(Map.of("error", e.getMessage()));
    }
}
}
