package com.example.cryptowebshop.repository;

import com.example.cryptowebshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repo for {@link com.example.cryptowebshop.model.Product}.
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
