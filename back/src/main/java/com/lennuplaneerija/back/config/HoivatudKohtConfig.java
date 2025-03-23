package com.lennuplaneerija.back.config;

import com.lennuplaneerija.back.andmepääsukiht.HoivatudKoht;
import com.lennuplaneerija.back.andmepääsukiht.HoivatudKohtRepo;
import com.lennuplaneerija.back.andmepääsukiht.Lend;
import com.lennuplaneerija.back.andmepääsukiht.LendRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Configuration
public class HoivatudKohtConfig {

    /**
     * Genereerib sisendina antud arv korda suvalise koha. Kui kohta juba listis ei ole, lisab selle.
     * @param kordusi Genereerimise korduste arv.
     * @return List suvalistest kohtadest
     */
    private List<String> genereeriHoivatudKohad(int kordusi) {

        List<String> hoivatudKohad = new ArrayList<>();
        String[] tahised = {"A", "B", "C", "D", "E", "F"};
        Random rand = new Random();
        for (int i = 0; i < kordusi; i++) {
            int rida = rand.nextInt(20);
            int taht = rand.nextInt(6);
            String kohaTahis = (rida < 12 ? rida + 1 : rida + 2) + tahised[taht];
            if (!hoivatudKohad.contains(kohaTahis)) {
                hoivatudKohad.add(kohaTahis);
            }
        }
        return hoivatudKohad;
    }

    @Bean
    @Order(2)
    CommandLineRunner commandLineRunnerHoivatudKoht(LendRepo lendRepo, HoivatudKohtRepo hoivatudKohtRepo) {
        return args -> {

            List<Lend> lennud = lendRepo.findAll();

            lennud.forEach(lend -> {
                List<String> kohaTahised = genereeriHoivatudKohad(50);
                kohaTahised.forEach(kohaTahis -> {
                    HoivatudKoht hoivatudKoht = new HoivatudKoht(
                            kohaTahis,
                            lend,
                            null
                            );
                    hoivatudKohtRepo.save(hoivatudKoht);
                });
            });
        };
    }
}
