package com.example.cryptowebshop.controller;

import com.example.cryptowebshop.model.Cart;
import com.example.cryptowebshop.service.CartService;
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
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping
    public List<Cart> getAllProducts() {
        return cartService.getAllProductsFromCart();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cart> getProductByIdFromCart(@PathVariable Long id) {
        Optional<Cart> cart = cartService.getProductByIdFromCart(id);
        return cart.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> saveProductInCart(@RequestBody Cart cart) {
        try {
            Cart addedCartItem = cartService.saveProductInCart(cart);
            return ResponseEntity.ok(addedCartItem);
        } catch (RuntimeException e) {
            return ResponseEntity.status(409).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductFromCart(@PathVariable Long id) {
        cartService.deleteProductFromCart(id);
        return ResponseEntity.noContent().build();
    }
}
