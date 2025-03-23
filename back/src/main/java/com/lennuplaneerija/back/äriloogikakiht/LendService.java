package com.lennuplaneerija.back.äriloogikakiht;

import com.lennuplaneerija.back.DTO.LendDTO;
import com.lennuplaneerija.back.andmepääsukiht.Lend;
import com.lennuplaneerija.back.andmepääsukiht.LendRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LendService {

    private final LendRepo lendRepo;

    public LendService(LendRepo lendRepo) {
        this.lendRepo = lendRepo;
    }

    public List<LendDTO> getLend() {
        return lendRepo.findAllLendDTO();
    }

}
