import Pais from "../components/Pais";
import IstmeSektsioonid from "../components/IstmeSektsioonid";
import Eelistused from "../components/Eelistused";
import { useParams } from "react-router-dom";
import React, { useState } from 'react';

function LennuBroneerimine() {
    const { id, hind } = useParams();

    const hoivatudKohad = [
        { id: 1, kohad: ["2B", "3C", "4C"] },
        { id: 2, kohad: ["15C", "16C"] },
        { id: 3, kohad: ["2B", "3C"] },
        { id: 4, kohad: ["15C", "16C"] }
    ];

    const [hoivatud, setHoivatud] = useState(hoivatudKohad[parseInt(id)].kohad);
    const [mitteSobivad, setMitteSobivad] = useState([]);
    const [kehvad, setKehvad] = useState([]);
    const [algus, setAlgus] = useState(" algus");

    return (
    <div className="pohi">
        <Pais />
        <div className="sisu broneerimine">
            <div className="lennuki-siluett">
                <div className="nina"></div>
                <IstmeSektsioonid 
                    hoivatudKohad={hoivatud}
                    mitteSobivad={mitteSobivad}
                    kehvad={kehvad}
                    algus={algus}/>
                <div className="saba"></div>
            </div>
            <Eelistused 
                hind={hind}
                setKehvad={setKehvad}
                setMitteSobivad={setMitteSobivad}
                setAlgus={setAlgus}/>
        </div>
    </div>
    );
}

export default LennuBroneerimine;