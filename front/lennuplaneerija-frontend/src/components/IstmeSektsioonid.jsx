import { PropTypes } from 'prop-types';
import { useState } from "react";


function IstmeSektsioonid(props) {

    const sektsioonid = Array(4).fill(null);
    const tahised = {0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F"};
    const sektsioonRida = Array(3).fill(null);
    const sektsioonRead = Array(10).fill(null);

    const hoivatudKohad = props.hoivatudKohad || [];
    const sobivadKohad = props.sobivadKohad || [];
    const mitteSobivadKohad = props.mitteSobivadKohad || [];
    const kehvadKohad = props.kehvadKohad || [];

    const [valitud, setValitud] = useState([]);

    const valitudKohad = valitud;

    function kohaVarv(kohaTahis) {
        const klassid = "istekoht" + props.algus;
        if (valitudKohad.includes(kohaTahis)) {
            return klassid + " valitud";
        }
        if (sobivadKohad.includes(kohaTahis)) {
            return klassid + " sobiv";
        }
        if (hoivatudKohad.includes(kohaTahis)) {
            return klassid + " hoivatud";
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
               (i % 2 === 0 ? tahised[k] : tahised[k + 3])
    }

    function valitudLuliti(e, kohaTahis) {
        if (e.currentTarget.classList.contains("valitud")) {
            setValitud(valitud.filter(koht => koht !== kohaTahis));
        } else if (!e.currentTarget.classList.contains("hoivatud")) {
            setValitud([...valitud, kohaTahis]);
        }
    }

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