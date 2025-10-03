package com.bootstrap.ex02;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Controle {

    @GetMapping("/")
    public String home() {
        return "home"; 
    }
}
