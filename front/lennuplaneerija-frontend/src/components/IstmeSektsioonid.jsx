import { PropTypes } from 'prop-types';
import { useState } from "react";


function IstmeSektsioonid(props) {

    const hoivatudKohad = props.hoivatudKohad || [];
    const mitteSobivadKohad = props.mitteSobivadKohad || [];
    const kehvadKohad = props.kehvadKohad || [];
    const valitudKohad = props.valitudKohad || [];

    function kohaVarv(kohaTahis) {
        const klassid = "istekoht" + props.algus;
        if (hoivatudKohad.includes(kohaTahis)) {
            return klassid + " hoivatud";
        }
        if (valitudKohad.includes(kohaTahis)) {
            return klassid + " valitud";
        }
        if (mitteSobivadKohad.includes(kohaTahis)) {
            return klassid + " mitte-sobiv";
        }
        if (kehvadKohad.includes(kohaTahis)) {
            return klassid + " kehv";
        }
        return klassid + " sobiv";
    }

    const kohaTahis = (i, j, k) => {
        return (i < 2 ? j + 1 : (j + 11 > 12 ? j + 12 : j + 11)) + 
               (i % 2 === 0 ? props.tahised[k] : props.tahised[k + 3])
    }

    function valitudLuliti(e, kohaTahis) {
        if (props.algus === "") {
            if (e.currentTarget.classList.contains("valitud")) {
                props.setValitudKohad(props.valitudKohad.filter(koht => koht !== kohaTahis))
            } else if (!e.currentTarget.classList.contains("hoivatud")) {
                props.setValitudKohad([...props.valitudKohad, kohaTahis]);
            }
        }
    }

    const sektsioonid = Array(4).fill(null);
    const sektsioonRida = Array(3).fill(null);
    const sektsioonRead = Array(10).fill(null);

    return (
    <div className="istmed-konteiner">
        {sektsioonid.map((_, i) => (
            <div key={i} className="istme-sektsioon">
                {sektsioonRead.map((_, j) => (
                    sektsioonRida.map((_, k) => (
                        <div key={`${i}-${j}-${k}`} 
                            className={kohaVarv(kohaTahis(i, j, k))} 
                            id={kohaTahis(i, j, k)}
                            onClick={(e) => {valitudLuliti(e, kohaTahis(i, j, k))}}>
                            <span>{kohaTahis(i, j, k)}</span>
                        </div>
                    ))
                ))}
            </div>
        ))}
    </div>
    );
}

IstmeSektsioonid.defaultProps = {
    hoivatudKohad: [],
    valitudKohad: [],
    sobivadKohad: [],
    mitteSobivadKohad: [],
    kehvadKohad: []
}
IstmeSektsioonid.propTypes = {
    hoivatudKohad: PropTypes.array,
    valitudKohad: PropTypes.array,
    sobivadKohad: PropTypes.array,
    mitteSobivadKohad: PropTypes.array,
    kehvadKohad: PropTypes.array
}

export default IstmeSektsioonid;