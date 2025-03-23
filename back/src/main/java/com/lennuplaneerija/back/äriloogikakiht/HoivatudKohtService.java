package com.lennuplaneerija.back.äriloogikakiht;

import com.lennuplaneerija.back.DTO.HoivatudKohtDTO;
import com.lennuplaneerija.back.andmepääsukiht.HoivatudKoht;
import com.lennuplaneerija.back.andmepääsukiht.HoivatudKohtRepo;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class HoivatudKohtService {

    private final HoivatudKohtRepo hoivatudKohtRepo;

    public HoivatudKohtService(HoivatudKohtRepo hoivatudKohtRepo) {
        this.hoivatudKohtRepo = hoivatudKohtRepo;
    }

    public List<HoivatudKohtDTO> getHoivatudKoht(Long lennuId) {
        return hoivatudKohtRepo.findByLendId(lennuId);
    }
}
