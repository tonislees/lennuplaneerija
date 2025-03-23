package com.lennuplaneerija.back.äriloogikakiht;

import com.lennuplaneerija.back.DTO.BroneeringDTO;
import com.lennuplaneerija.back.andmepääsukiht.Broneering;
import com.lennuplaneerija.back.andmepääsukiht.BroneeringRepo;
import com.lennuplaneerija.back.andmepääsukiht.Lend;
import com.lennuplaneerija.back.andmepääsukiht.LendRepo;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Optional;

@Service
public class BroneeringService {

    private final BroneeringRepo broneeringRepo;
    private final LendRepo lendRepo;

    public BroneeringService(BroneeringRepo broneeringRepo, LendRepo lendRepo) {
        this.broneeringRepo = broneeringRepo;
        this.lendRepo = lendRepo;
    }

    public List<Broneering> getBroneering() {
        return broneeringRepo.findAll();
    }

    @PostMapping
    public void lisaUusBroneering(BroneeringDTO broneeringDTO) {
        Long lendId = broneeringDTO.getLendId();
        Optional<Lend> lendOpt = lendRepo.findById(lendId);
        if (lendOpt.isPresent()) {
            Lend lend = lendOpt.get();

            Broneering broneering = new Broneering();
            broneering.setLend(lend);

            broneeringRepo.save(broneering);
        } else {
            throw new RuntimeException("Lend with id " + lendId + " not found.");
        }
    }
}
