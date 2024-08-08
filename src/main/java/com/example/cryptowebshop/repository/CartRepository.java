package com.example.cryptowebshop.repository;

import com.example.cryptowebshop.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repo for {@link com.example.cryptowebshop.model.Product}.
 */
@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    List<Cart> findByName(String name);

}
