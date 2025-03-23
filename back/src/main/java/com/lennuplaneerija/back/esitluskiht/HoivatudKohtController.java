package com.lennuplaneerija.back.esitluskiht;

import com.lennuplaneerija.back.DTO.HoivatudKohtDTO;
import com.lennuplaneerija.back.äriloogikakiht.HoivatudKohtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
@RequestMapping(path = "api/kohad")
public class HoivatudKohtController {

    private final HoivatudKohtService hoivatudKohtService;

    @Autowired
    public HoivatudKohtController(HoivatudKohtService hoivatudKohtService) {
        this.hoivatudKohtService = hoivatudKohtService;
    }

    @GetMapping("/{lennuId}")
    public List<HoivatudKohtDTO> getHoivatudKoht(@PathVariable Long lennuId) {
        return hoivatudKohtService.getHoivatudKoht(lennuId);
    }
}
