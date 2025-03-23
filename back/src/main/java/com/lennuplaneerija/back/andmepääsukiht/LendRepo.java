package com.lennuplaneerija.back.andmepääsukiht;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LendRepo extends JpaRepository<Lend, Long> {
}
