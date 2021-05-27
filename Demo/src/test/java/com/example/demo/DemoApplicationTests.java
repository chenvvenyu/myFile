package com.example.demo;

import com.example.demo.bean.Person;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

@SpringBootTest
class DemoApplicationTests {

    @Autowired
    Person person;

    @Autowired
    ApplicationContext ioc;


   @Test
    void contextLoads() {
       boolean b = ioc.containsBean("hellowService");
       System.out.println(b);
    }

    @Test
    void getData(){
       System.out.println(person);
    }
}
