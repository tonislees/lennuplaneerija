package com.lennuplaneerija.back.esitluskiht;

import com.lennuplaneerija.back.DTO.BroneeringDTO;
import com.lennuplaneerija.back.andmepääsukiht.Broneering;
import com.lennuplaneerija.back.äriloogikakiht.BroneeringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
@RequestMapping(path = "api/broneering")
public class BroneeringController {

    private final BroneeringService broneeringService;

    @Autowired
    public BroneeringController(BroneeringService broneeringService) {
        this.broneeringService = broneeringService;
    }

    @GetMapping
    public List<Broneering> getBroneering() {
        return broneeringService.getBroneering();
    }

    @PostMapping
    public void lisaBroneering(@RequestBody Long lennuId) {
        broneeringService.lisaUusBroneering(new BroneeringDTO(lennuId));
    }
}
