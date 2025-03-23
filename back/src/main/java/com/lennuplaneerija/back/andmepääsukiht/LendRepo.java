package com.lennuplaneerija.back.andmepääsukiht;

import com.lennuplaneerija.back.DTO.LendDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LendRepo extends JpaRepository<Lend, Long> {

    @Query("SELECT new com.lennuplaneerija.back.DTO.LendDTO(l.id, l.alguskoht, l.sihtkoht, l.kuupaev, l.piletiHind, l.logo, l.sihtkohaPilt) FROM Lend l")
    List<LendDTO> findAllLendDTO();
}
