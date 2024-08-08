package com.example.cryptowebshop.service;

import com.example.cryptowebshop.model.Favorite;
import com.example.cryptowebshop.repository.FavoritesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoritesService {

    @Autowired
    private FavoritesRepository favoritesRepository;

    public List<Favorite> getAllFavorites() {
        return favoritesRepository.findAll();
    }

    public Favorite saveFavorite(Favorite favorite) {
        List<Favorite> existingCartItems = favoritesRepository.findByName(favorite.getName());
        if (!existingCartItems.isEmpty()) {
            throw new RuntimeException("This product is already in favorites.");
        }
        return favoritesRepository.save(favorite);
    }

    public void deleteFavorite(Long id) {
        favoritesRepository.deleteById(id);
    }
}
