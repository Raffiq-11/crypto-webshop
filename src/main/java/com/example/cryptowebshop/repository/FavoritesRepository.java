package com.example.cryptowebshop.repository;

import com.example.cryptowebshop.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repo for {@link com.example.cryptowebshop.model.Favorite}.
 */
@Repository
public interface FavoritesRepository extends JpaRepository<Favorite, Long> {
    List<Favorite> findByName(String name);
}
