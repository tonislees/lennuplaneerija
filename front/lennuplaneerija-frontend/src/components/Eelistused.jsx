import { useState } from 'react';
import { PropTypes } from 'prop-types';

function Eelistused(props) {
    const [reisijateArv, setReisijateArv] = useState(0);
    const [eelistused, setEelistused] = useState({
        jalaruum: false,
        aknaAll: false,
        valjapaasuLahedal: false
    });

    function alustaPlaan(e) {
        e.currentTarget.style.display = "none";
        const mitteSobivad = [];
        const kehvad = [];
        if (eelistused.jalaruum) {
            mitteSobivad.push("2B", "3C", "4C");
        }
        if (eelistused.aknaAll) {
            mitteSobivad.push("15C", "16C");
        }
        if (eelistused.valjapaasuLahedal) {
            mitteSobivad.push("2B", "3C");
        }
        props.setKehvad(kehvad);
        props.setMitteSobivad(mitteSobivad);
        props.setAlgus("");
    }

    return (
    <div className="eelistused-konteiner">
        <h2>Eelistused:</h2>
        <div className="eelistused">
            <label>
                <input type="checkbox" />Rohkem jalaruumi
            </label>
            <label>
                <input type="checkbox" />Akna all
            </label>
            <label>
                <input type="checkbox" />Väljapääsu lähedal
            </label>
            {reisijateArv > 1 ? 
                <label>
                    <input type="checkbox" />Kõrvuti istmed
                </label> : null
            }
            <input type="number" placeholder="Reisijate arv..." onChange={(e) => setReisijateArv(e.target.value)} />
            <button onClick={(e) => alustaPlaan(e)}>Kinnita</button>
            <h3>Hind: {reisijateArv * props.hind} €</h3>
            <button>Broneeri</button>
        </div>
    </div>
    );
}
Eelistused.defaultProps = {

};
Eelistused.propTypes = {

};

export default Eelistused;