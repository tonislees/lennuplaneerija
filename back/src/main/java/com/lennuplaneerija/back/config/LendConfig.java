package com.lennuplaneerija.back.config;

import com.lennuplaneerija.back.andmepääsukiht.Broneering;
import com.lennuplaneerija.back.andmepääsukiht.HoivatudKoht;
import com.lennuplaneerija.back.andmepääsukiht.Lend;
import com.lennuplaneerija.back.andmepääsukiht.LendRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static java.util.Calendar.MARCH;

@Configuration
public class LendConfig {

    private byte[] loeAndmedFailist(String failiTee) throws IOException {
        ClassPathResource fail = new ClassPathResource("static/" + failiTee);
        return Files.readAllBytes(fail.getFile().toPath());
    }

    @Bean
    CommandLineRunner commandLineRunner(LendRepo lendRepo) {
        return args -> {

            byte[] LHlogo = loeAndmedFailist("LHLogo.png");

            Lend tallinnLissabon = new Lend(
                    "Tallinn",
                    LocalDate.of(2025, MARCH, 24),
                    "Lissabon",
                    250,
                    LHlogo,
                    LHlogo,
                    new ArrayList<>(),
                    new ArrayList<>()
            );

            Lend lissabonTallinn = new Lend(
                    "Lissabon",
                    LocalDate.of(2025, MARCH, 24),
                    "Tallinn",
                    250,
                    LHlogo,
                    LHlogo,
                    new ArrayList<>(),
                    new ArrayList<>()
            );

            lendRepo.saveAll(List.of(tallinnLissabon, lissabonTallinn));
        };
    }

}
