import React from 'react'
import Pais from "../components/Pais";
import LennudFiltrid from "../components/LennudFiltrid";
import Lend from "../components/Lend";
import { getLennud } from "../services/api";
import { useState, useEffect } from "react";

function Lennud() {

    const [lahtekoht, setLahtekoht] = useState('');
    const [sihtkoht, setSihtkoht] = useState('');
    const [kuupaev, setKuupaev] = useState('');
    const [hinnalagi, setHind] = useState('');
    const [lennud, setLennud] = useState([])

    useEffect(() => {
        const laeLennud = async () => {
            try {
                const apiLennud = await getLennud()
                setLennud(apiLennud)
            } catch (err) {
                console.log(err)
            }
        }

        laeLennud()
    }, [])

    const filtreeritudLennud = lennud.filter(lend => {
        return (lahtekoht === '' ? true : lend.alguskoht.toLowerCase().includes(lahtekoht.toLowerCase())) &&
            (sihtkoht === '' ? true : lend.sihtkoht.toLowerCase().includes(sihtkoht.toLowerCase())) &&
            (kuupaev === '' ? true : lend.kuupaev === new Date(kuupaev).toDateString()) &&
            (hinnalagi === '' ? true : parseInt(lend.piletiHind) <= parseInt(hinnalagi))
    })

    return (
    <div className="pohi">
        <Pais />
        <div className="sisu">
            <LennudFiltrid 
                lahtekoht={lahtekoht} 
                sihtkoht={sihtkoht} 
                kuupaev={kuupaev} 
                hinnalagi={hinnalagi} 
                setLahtekoht={setLahtekoht} 
                setSihtkoht={setSihtkoht} 
                setKuupaev={setKuupaev} 
                setHind={setHind}
            />
            <div className="lennud-konteiner">
                {filtreeritudLennud.map(lend => (
                    <Lend 
                        key={lend.id} 
                        logo={lend.logo} 
                        alguskoht={lend.alguskoht} 
                        sihtkoht={lend.sihtkoht} 
                        kuupaev={new Date(lend.kuupaev)} 
                        hind={lend.piletiHind} 
                        id={lend.id}
                    />
                ))}
            </div>
        </div>
    </div>
    );

}

export default Lennud;