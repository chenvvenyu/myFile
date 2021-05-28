package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ImportResource;

//@ImportResource(locations = {"classpath:hellow.xml"})
@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
//       ConfigurableApplicationContext run = SpringApplication.run(DemoApplication.class, args);
//       String[] names= run.getBeanDefinitionNames();
//       for(String name:names){
//           System.out.println(name);
//       }
    }

}
