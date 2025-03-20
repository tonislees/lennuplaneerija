import Pais from "../components/Pais";
import LennudFiltrid from "../components/LennudFiltrid";
import Lend from "../components/Lend";
import logo from '../assets/LHlogo.png';
import { useState } from "react";

function Lennud() {

    const [lahtekoht, setLahtekoht] = useState('');
    const [sihtkoht, setSihtkoht] = useState('');
    const [kuupaev, setKuupaev] = useState('');
    const [hinnalagi, setHind] = useState('');

    const lennud = [
        { id: 1, alguskoht: "Tallinn", sihtkoht: "Tartu", kuupaev: new Date(2025, 3, 22), hind: "100€" },
        { id: 2, alguskoht: "Tartu", sihtkoht: "Helsingi", kuupaev: new Date(2025, 3, 22), hind: "80€" },
        { id: 3, alguskoht: "Tallinn", sihtkoht: "Pärnu", kuupaev: new Date(2025, 3, 22), hind: "120€" },
        { id: 4, alguskoht: "Pärnu", sihtkoht: "Tallinn", kuupaev: new Date(2025, 3, 22), hind: "120€" },
    ]

    const filtreeritudLennud = lennud.filter(lend => {
        return (lahtekoht === '' ? true : lend.alguskoht.toLowerCase().includes(lahtekoht.toLowerCase())) &&
            (sihtkoht === '' ? true : lend.sihtkoht.toLowerCase().includes(sihtkoht.toLowerCase())) &&
            (kuupaev === '' ? true : lend.kuupaev.toDateString() === new Date(kuupaev).toDateString()) &&
            (hinnalagi === '' ? true : parseInt(lend.hind) <= parseInt(hinnalagi))
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
                        logo={logo} 
                        alguskoht={lend.alguskoht} 
                        sihtkoht={lend.sihtkoht} 
                        kuupaev={lend.kuupaev} 
                        hind={lend.hind} 
                        id={lend.id}
                    />
                ))}
            </div>
        </div>
    </div>
    );

}

export default Lennud;