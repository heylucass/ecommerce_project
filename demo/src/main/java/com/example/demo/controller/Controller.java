package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.cloth.Cloth;
import com.example.demo.cloth.ClothesRepository;

@RestController
@RequestMapping("clothes")
public class Controller {

    @Autowired
    private ClothesRepository repository;

    @GetMapping
    public List<Cloth> getAll() {
        List<Cloth> clothList = repository.findAll();
        return clothList;
    }
}
