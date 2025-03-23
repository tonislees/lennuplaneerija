package com.lennuplaneerija.back.esitluskiht;

import com.lennuplaneerija.back.andmepääsukiht.Lend;
import com.lennuplaneerija.back.äriloogikakiht.LendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/lend")
public class LendController {

    private final LendService lendService;

    @Autowired
    public LendController(LendService lendService) {
        this.lendService = lendService;
    }

    @GetMapping
    public List<Lend> getLend() {
        return lendService.getLend();
    }

}
