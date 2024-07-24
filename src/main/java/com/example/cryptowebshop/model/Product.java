package com.example.cryptowebshop.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
//import lombok.Getter;
//import lombok.Setter;

//@Getter
//@Setter
@Entity
//@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String name;

    private String description;

    private String imageUrl;

//    public Product(Long id, String name, String description, String imageUrl) {
//        this.id = id;
//        this.name = name;
//        this.description = description;
//        this.imageUrl = imageUrl;
//    }

//    public Product() {}
}
