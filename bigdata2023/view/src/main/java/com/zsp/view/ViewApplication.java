package com.zsp.view;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.zsp.view.controller")

//@MapperScan("mybatis")
public class ViewApplication {

    public static void main(String[] args) {
        SpringApplication.run(ViewApplication.class, args);
//        System.out.println("hello");
//        System.out.println("hello");
//        System.out.println("hello");
//        System.out.println("hello");
    }

}
