import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { func, PropTypes } from 'prop-types';
import { postBroneering } from "../services/api";


function Eelistused(props) {    


    const liigu = useNavigate();

    const liiguBroneerimisLehele = () => {
        liigu(`/broneeringud`);
    };

    function alustaPlaan(e) {
        e.currentTarget.style.display = "none";
        props.setAlgus("");
    }

    useEffect(() => {
        if (props.algus === "") {
            muudaPlaani(document.getElementById("reisijate-arv-input"))
        }
    }, [props.algus, props.kehvadKohad, props.mitteSobivadKohad, props.eelistused])

    useEffect(() => {
        if (props.algus === "") {
            document.getElementById("reisijate-arv-input").value = props.reisijateArv
        }
    }, [props.reisijateArv])

    function muudaPlaani(e) {
        const uusReisijateArv = parseInt(e.value) || 0;
        props.setReisijateArv(uusReisijateArv)
        if (uusReisijateArv === 0 || props.algus === " algus") {
            props.setValitudKohad([])
            return
        }
        let vabadKohad = []
        const kohadList = [props.mitteSobivadKohad, props.kehvadKohad]
        for (let i=2; i >= 0; i--) {
            let sobimatudKohad = new Set();
            for (let j=0; j < i; j++) {
                kohadList[j].forEach(koht => sobimatudKohad.add(koht))
            }
            if (!props.eelistused.korvutiIstmed) {
                for (let koht of props.koikIstmed()) {
                    if (!props.hoivatudKohad.includes(koht)) {
                        if (sobimatudKohad.has(koht)) {
                            continue
                        }
                        vabadKohad.push(koht)
                        if (vabadKohad.length >= uusReisijateArv) {
                            props.setValitudKohad(vabadKohad)
                            return
                        }
                    }
                }
            } else {
                let sobivLeitud = false
                for (let koht of props.koikIstmed()) {
                    if (!props.hoivatudKohad.includes(koht)) {
                        if (sobivLeitud) {
                            vabadKohad.push(koht)
                        } else if (!sobimatudKohad.has(koht) && !(koht.length === 2 ? koht[1] === "F" : koht[2] === "F")) {
                            sobivLeitud = true
                            vabadKohad.push(koht)
                        }
                        if (vabadKohad.length >= uusReisijateArv) {
                            props.setValitudKohad(vabadKohad)
                            return
                        }
                    }
                }
            }
        }
    }

    return (
    <div className="eelistused-konteiner">
        <h2>Eelistused</h2>
        <div className="eelistused">
            <label>
                <input 
                    name="rohkem-jalaruumi"
                    onChange={(e) => props.setEelistused({...props.eelistused, jalaruum: e.target.checked})}
                    type="checkbox" />Rohkem jalaruumi
            </label>
            <label>
                <input 
                    name="akna-all"
                    onChange={(e) => {
                        props.setEelistused({...props.eelistused, aknaAll: e.target.checked})
                    }}
                    type="checkbox" />Akna all
            </label>
            <label>
                <input 
                    name="valjapaasu-lahedal"
                    onChange={(e) => props.setEelistused({...props.eelistused, valjapaasuLahedal: e.target.checked})}
                    type="checkbox" />Väljapääsu lähedal
            </label>
            {props.reisijateArv > 1 ? 
                <label>
                    <input 
                        name="korvuti-istmed"
                        onChange={(e) => props.setEelistused({...props.eelistused, korvutiIstmed: e.target.checked})}
                        type="checkbox" />Kõrvuti istekohad
                </label> : null
            }
            <label htmlFor="reisijate-arv-input">Reisijate arv</label>
            <input 
                id="reisijate-arv-input"
                type="number" 
                onChange={(e) => muudaPlaani(e.target)} 
            />
            <button onClick={(e) => alustaPlaan(e)}>Kinnita eelistused</button>
            <h3>Hind: {props.reisijateArv * props.hind} €</h3>
            <button onClick={() => {
                postBroneering(props.lennuId)
                liiguBroneerimisLehele()
            }}>Broneeri</button>
        </div>
    </div>
    );
}
Eelistused.defaultProps = {

};
Eelistused.propTypes = {

};

export default Eelistused;