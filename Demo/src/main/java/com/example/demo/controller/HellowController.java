package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

//将所有的方法返回的数据直接写给游览器
@ResponseBody
@Controller
public class HellowController {

    @RequestMapping("/hellow")
    public String hellow(){
        return "hellow";
    }

}
