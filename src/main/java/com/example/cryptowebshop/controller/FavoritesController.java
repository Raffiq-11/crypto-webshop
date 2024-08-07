package com.example.cryptowebshop.controller;

import com.example.cryptowebshop.model.Favorite;
import com.example.cryptowebshop.model.Product;
import com.example.cryptowebshop.service.FavoritesService;
import com.example.cryptowebshop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/favorites")
@CrossOrigin(origins = "http://localhost:4200")
public class FavoritesController {

    @Autowired
    private FavoritesService favoritesService;

    @GetMapping
    public List<Favorite> getAllFavorites() {
        System.out.println("get");
        return favoritesService.getAllFavorites();
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
//        Optional<Product> product = productService.getProductById(id);
//        return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }

    @PostMapping
    public Favorite createFavorite(@RequestBody Favorite favorite) {
        System.out.println("in backendcreatefavorite");
        return favoritesService.saveFavorite(favorite);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFavorite(@PathVariable Long id) {
        favoritesService.deleteFavorite(id);
        return ResponseEntity.noContent().build();
    }
}
