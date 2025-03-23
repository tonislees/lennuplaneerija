package com.lennuplaneerija.back.andmepääsukiht;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity(name = "Lend")
@Table(
        name = "lennud"
)
@Getter
@Setter
public class Lend {

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
            name = "alguskoht",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String alguskoht;

    @Column(
            name = "kuupaev",
            nullable = false,
            columnDefinition = "DATE"
    )
    private LocalDate kuupaev;

    @Column(
            name = "sihtkoht",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String sihtkoht;

    @Column(
            name = "pileti_hind",
            nullable = false,
            columnDefinition = "INT"
    )
    private int piletiHind;

    @Lob
    @Column(
            name = "lennufirma_logo",
            nullable = false
    )
    private byte[] logo;

    @Lob
    @Column(
            name = "sihtkoha_pilt",
            nullable = false
    )
    private byte[] sihtkohaPilt;

    @OneToMany(mappedBy = "lend")
    private List<Broneering> broneeringud;

    @OneToMany(mappedBy = "lend")
    private List<HoivatudKoht> hoivatudKohad;

    public Lend(String alguskoht, LocalDate kuupaev, String sihtkoht, int piletiHind, byte[] logo, byte[] sihtkohaPilt, List<Broneering> broneeringud, List<HoivatudKoht> hoivatudKohad) {
        this.alguskoht = alguskoht;
        this.kuupaev = kuupaev;
        this.sihtkoht = sihtkoht;
        this.piletiHind = piletiHind;
        this.logo = logo;
        this.sihtkohaPilt = sihtkohaPilt;
        this.broneeringud = broneeringud;
        this.hoivatudKohad = hoivatudKohad;
    }

    public Lend() {
    }
}