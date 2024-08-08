package com.example.cryptowebshop.service;

import com.example.cryptowebshop.model.Cart;
import com.example.cryptowebshop.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public List<Cart> getAllProductsFromCart() {
        return cartRepository.findAll();
    }

    public Optional<Cart> getProductByIdFromCart(Long id) {
        return cartRepository.findById(id);
    }

    public Cart saveProductInCart(Cart cart) {
        List<Cart> existingCartItems = cartRepository.findByName(cart.getName());
        if (!existingCartItems.isEmpty()) {
            throw new RuntimeException("This product is already in the cart.");
        }
        return cartRepository.save(cart);
    }

    public void deleteProductFromCart(Long id) {
        cartRepository.deleteById(id);
    }
}
