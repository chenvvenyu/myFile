package com.example.demo.controller;

import com.example.demo.bean.Dog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

//将所有的方法返回的数据直接写给游览器
@ResponseBody
@Controller
public class HellowController {

    @Autowired
    Dog dog;

    @RequestMapping("/dog")
    public  Dog dog(){return dog;}

    @RequestMapping("/hellow")
    public String hellow(){
        return "hellow";
    }

}
