package com.lennuplaneerija.back.DTO;

import com.lennuplaneerija.back.andmepääsukiht.Lend;

import java.time.LocalDate;

public record LendDTO(
        Long id,
        String alguskoht,
        String sihtkoht,
        LocalDate kuupaev,
        Integer piletiHind,
        byte[] logo,
        byte[] sihtkohaPilt) {}