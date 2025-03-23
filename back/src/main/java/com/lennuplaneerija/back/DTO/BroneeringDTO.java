package com.lennuplaneerija.back.DTO;

public record BroneeringDTO(Long lend_id) {
    public Long getLendId() {
        return lend_id;
    }
}
