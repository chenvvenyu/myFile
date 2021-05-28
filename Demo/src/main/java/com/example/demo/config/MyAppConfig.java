package com.example.demo.config;


import com.example.demo.service.HellowService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//声明当前类是个配置类;取代原有spring配置
@Configuration
public class MyAppConfig {

    @Bean
    public HellowService hellowService(){
        System.out.println("配置类");
        return new HellowService();
    }
}
