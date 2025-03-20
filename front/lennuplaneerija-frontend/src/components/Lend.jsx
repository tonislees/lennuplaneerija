function Lend(props) {
    return (
    <div className="lend-konteiner">
        <div className="lend">
            <img src={props.logo} alt="lennufirma logo" className='logo-pilt'/>
            <span>{props.alguskoht}</span>
            <span><i className="nool"></i></span>
            <span>{props.sihtkoht}</span>
            <span className='kuupaev'>{props.kuupaev.toLocaleDateString()}</span>
        </div>

        <div className="lend">
            <span>{props.hind}</span>
            <button className="broneeri-nupp">Broneeri</button>
        </div>
    </div>
    );

}

export default Lend;