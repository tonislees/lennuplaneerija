package com.lennuplaneerija.back.andmepääsukiht;

import com.lennuplaneerija.back.DTO.HoivatudKohtDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HoivatudKohtRepo extends JpaRepository<HoivatudKoht, Long> {

    @Query("SELECT new com.lennuplaneerija.back.DTO.HoivatudKohtDTO(h.kohaTahis) FROM HoivatudKohad h WHERE h.lend.id = :id")
    List<HoivatudKohtDTO> findByLendId(Long id);
}
