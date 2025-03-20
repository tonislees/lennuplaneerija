function LennudFiltrid(props) {

    return (
        <>
            <div className="filt-konteiner">
                <div className="filt-paar">
                    <label htmlFor="lahtekoht">Lähtekoht</label>
                    <input name="lahtekoht" id="lahtekoht" type="text" value={props.lahtekoht} onChange={e => props.setLahtekoht(e.target.value)}></input>
                </div>
                <div className="filt-paar">
                    <label htmlFor="sihtkoht">Sihtkoht</label>
                    <input name="sihtkoht" id="sihtkoht" type="text" value={props.sihtkoht} onChange={e => props.setSihtkoht(e.target.value)}></input>
                </div>
                <div className="filt-paar">
                    <label htmlFor="kuupaev">Kuupäev</label>
                    <input name="kuupaev" id="kuupaev" type="date" value={props.kuupaev} onChange={e => props.setKuupaev(e.target.value)}></input>
                </div>
                <div className="filt-paar">
                    <label htmlFor="hind">Hinnalagi</label>
                    <input name="hind" id="hind" type="number" value={props.hinnalagi} onChange={e => props.setHind(e.target.value)}></input>
                </div>
            </div>
        </>
    )
}

export default LennudFiltrid;