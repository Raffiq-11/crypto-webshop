package com.example.cryptowebshop.repository;

import com.example.cryptowebshop.model.Favorite;
import com.example.cryptowebshop.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repo for {@link com.example.cryptowebshop.model.Favorite}.
 */
@Repository
public interface FavoritesRepository extends JpaRepository<Favorite, Long> {
}
