import { useState } from 'react';
import { PropTypes } from 'prop-types';

function Eelistused(props) {    

    function alustaPlaan(e) {
        e.currentTarget.style.display = "none";
        const mitteSobivad = [];
        const kehvad = [];
        if (props.eelistused.jalaruum) {
            mitteSobivad.push("2B", "3C", "4C");
        }
        if (props.eelistused.aknaAll) {
            mitteSobivad.push("15C", "16C");
        }
        if (props.eelistused.valjapaasuLahedal) {
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
                <input 
                    onChange={(e) => props.setEelistused({...props.eelistused, jalaruum: e.target.checked})}
                    type="checkbox" />Rohkem jalaruumi
            </label>
            <label>
                <input 
                    onChange={(e) => props.setEelistused({...props.eelistused, aknaAll: e.target.checked})}
                    type="checkbox" />Akna all
            </label>
            <label>
                <input 
                    onChange={(e) => props.setEelistused({...props.eelistused, valjapaasuLahedal: e.target.checked})}
                    type="checkbox" />Väljapääsu lähedal
            </label>
            {props.reisijateArv > 1 ? 
                <label>
                    <input 
                        onChange={(e) => props.setEelistused({...props.eelistused, korvutiIstmed: e.target.checked})}
                        type="checkbox" />Kõrvuti istmed
                </label> : null
            }
            <input 
                type="number" 
                placeholder="Reisijate arv..." 
                onChange={(e) => props.setReisijateArv(e.target.value)} />
            <button onClick={(e) => alustaPlaan(e)}>Kinnita eelistused</button>
            <h3>Hind: {props.reisijateArv * props.hind} €</h3>
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