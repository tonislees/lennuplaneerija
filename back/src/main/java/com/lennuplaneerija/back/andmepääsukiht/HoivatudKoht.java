package com.lennuplaneerija.back.andmepääsukiht;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "HoivatudKohad")
@Table(
        name = "hoivatud_kohad"
)
@Getter
@Setter
public class HoivatudKoht {

    @Id
    @SequenceGenerator(
            name = "lend_sequence",
            sequenceName = "lend_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "lend_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )
    private long id;

    @Column(
            name = "koha_tahis",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String kohaTahis;

    @ManyToOne
    @JoinColumn(name = "lend_id")
    private Lend lend;

    @ManyToOne
    @JoinColumn(name = "broneering_id"
    )
    private Broneering broneering;

    public HoivatudKoht(String kohaTahis, Lend lend, Broneering broneering) {
        this.kohaTahis = kohaTahis;
        this.lend = lend;
        this.broneering = broneering;
    }

    public HoivatudKoht() {
    }
}