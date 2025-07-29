package com.sheoran.repository;

import com.sheoran.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepo extends JpaRepository<Order,Long> {

    List<Order> findByUserId(Long userId);
    List<Order> findBySellerId(Long sellerId);
}
