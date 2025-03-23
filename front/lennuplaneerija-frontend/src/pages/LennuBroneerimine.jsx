import Pais from "../components/Pais";
import IstmeSektsioonid from "../components/IstmeSektsioonid";
import Eelistused from "../components/Eelistused";
import { useParams } from "react-router-dom";
import { getHoivatudKohad } from "../services/api";
import React, { useState, useEffect, useMemo } from 'react';

function LennuBroneerimine() {
    const { id, hind } = useParams();

    const [hoivatudKohad, setHoivatudKohad] = useState([])
    
    useEffect(() => {
        const laeKohad = async () => {
            try {
                const apiKohad = await getHoivatudKohad(id)
                const kohad = []
                for (let koht in apiKohad) {
                    kohad.push(apiKohad[koht].kohaTahis)
                }
                setHoivatudKohad(kohad)
            } catch (err) {
                console.log(err)
            }
        }

        laeKohad()
    }, [])


    const [mitteSobivad, setMitteSobivad] = useState([]);
    const [kehvad, setKehvad] = useState([]);
    const [algus, setAlgus] = useState(" algus");
    const [eelistused, setEelistused] = useState({
        jalaruum: false,
        aknaAll: false,
        valjapaasuLahedal: false,
        korvutiIstmed: false
    });
    const [reisijateArv, setReisijateArv] = useState(0);
    const [valitudKohad , setValitudKohad] = useState([]);

    useEffect(() => {
        if (algus === "") {
            setReisijateArv(valitudKohad.length)
        }
    }, [valitudKohad])

    const tahised = {0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F"};
    
    const koikIstmed = () => {
        const istmed = [];
        for (let i = 0; i < 20; i++) {
            for (let j=0; j < 6; j++) {
                istmed.push((i < 12 ? i + 1 : i + 2) + tahised[j]);
            }
        }
        return istmed;
    }

    const jalaruumIstmed = useMemo(() => ({
        "kehv": koikIstmed().filter(koht => parseInt(koht) !== 1 && parseInt(koht) !== 11)
    }), []);

    const aknaAllIstmed = useMemo(() => ({
        "kehv": koikIstmed().filter(koht => (koht.length === 2 ? koht[1] === "B" || koht[1] === "E" : koht[2] === "B" || koht[2] === "E")),
        "mitteSobiv": koikIstmed().filter(koht => (koht.length === 2 ? koht[1] === "C" || koht[1] === "D" : koht[2] === "C" || koht[2] === "D"))
    }), []);

    const valjapaasuLahedalRead = useMemo(() => ({
        "kehv": [3, 4, 7, 8, 14, 15, 18, 19], 
        "mitteSobiv": [5, 6, 16, 17]
    }), []);

    const valjapaasuLahedalIstmed = useMemo(() => ({
        "kehv": koikIstmed().filter(koht => valjapaasuLahedalRead.kehv.includes(parseInt(koht))),
        "mitteSobiv": koikIstmed().filter(koht => valjapaasuLahedalRead.mitteSobiv.includes(parseInt(koht)))
    }), [valjapaasuLahedalRead]);

    useEffect(() => {
        const valikud = {"jalaruum": eelistused.jalaruum ? jalaruumIstmed : {"kehv": []},
                     "aknaAll": (eelistused.aknaAll) ? aknaAllIstmed : {"kehv": [], "mitteSobiv": []},
                     "valjapaasuLahedal": eelistused.valjapaasuLahedal ? valjapaasuLahedalIstmed : {"kehv": [], "mitteSobiv": []}};
        const mitteSobivadIstmed = Array.from(new Set([...valikud.aknaAll.mitteSobiv, 
                                                       ...valikud.valjapaasuLahedal.mitteSobiv]))
        const kehvadIstmed = Array.from(new Set([...valikud.aknaAll.kehv, 
                                                 ...valikud.valjapaasuLahedal.kehv, 
                                                 ...valikud.jalaruum.kehv])).filter(koht => !mitteSobivadIstmed.includes(koht))
        setKehvad(kehvadIstmed)
        setMitteSobivad(mitteSobivadIstmed)
    }, [eelistused, algus])
    return (
    <div className="pohi">
        <Pais />
        <div className="sisu broneerimine">
            <div className="lennuki-siluett">
                <div className="nina"></div>
                <IstmeSektsioonid 
                    hoivatudKohad={hoivatudKohad}
                    mitteSobivadKohad={mitteSobivad}
                    kehvadKohad={kehvad}
                    algus={algus}
                    tahised={tahised}
                    valitudKohad={valitudKohad}
                    setValitudKohad={setValitudKohad}
                    setReisijateArv={setReisijateArv}
                />
                <div className="saba"></div>
            </div>
            <Eelistused 
                hind={hind}
                setKehvad={setKehvad}
                setMitteSobivad={setMitteSobivad}
                algus={algus}
                setAlgus={setAlgus}
                eelistused={eelistused}
                setEelistused={setEelistused}
                reisijateArv={reisijateArv}
                setReisijateArv={setReisijateArv}
                koikIstmed={koikIstmed}
                setValitudKohad={setValitudKohad}
                hoivatudKohad={hoivatudKohad}
                mitteSobivadKohad={mitteSobivad}
                kehvadKohad={kehvad}
                valitudKohad={valitudKohad}
                lennuId={parseInt(id)}
            />
        </div>
    </div>
    );
}

export default LennuBroneerimine;