package com.example.demo.cloth;

import org.hibernate.annotations.UuidGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Table(name = "clothes")
@Entity(name = "clothes")
public class Cloth {

    @UuidGenerator
    private Long id;

    private String name;

    private Integer price;

    private String img;



}
