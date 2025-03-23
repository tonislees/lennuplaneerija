package com.lennuplaneerija.back.andmepääsukiht;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity(name = "Broneeringud")
@Table(name = "broneeringud")
@Getter
@Setter
public class Broneering {

    @Id
    @SequenceGenerator(
            name = "broneeringud_sequence",
            sequenceName = "broneeringud_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "broneeringud_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )
    private long id;

    @ManyToMany(mappedBy = "broneeringud")
    private List<Lend> lennud;

    @OneToMany(mappedBy = "broneering")
    private List<HoivatudKoht> hoivatudKohad;

    public Broneering(List<HoivatudKoht> hoivatudKohad, List<Lend> lennud) {
        this.hoivatudKohad = hoivatudKohad;
        this.lennud = lennud;
    }

    public Broneering() {
    }
}
