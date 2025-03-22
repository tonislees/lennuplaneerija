function Broneering(props) {

    return (
    <div className="broneering-konteiner">
        <div className="pilt-asukohad">
            <img src={props.pilt} alt="sihtkoha-pilt" className='sihtkoht-pilt'/>
            <div className="asukohad">
                <div className="algus-nool">
                    <h2>{props.algus}</h2>
                    <span><i className="nool alla"></i></span>
                </div>
                <h1>{props.sihtkoht}</h1>
                <span className="kp">{props.kuupaev}</span>
            </div>
        </div>
        <div className="lennuinfo">
            <span>Kohad</span>
            <div className="kohad">
                {props.kohad.map(koht => (
                    <span>{koht}</span>
                ))}
            </div>
            <span className="kestus">Lennu kestus: {props.kestus} h</span>
        </div>
    </div>
    );

}

export default Broneering;