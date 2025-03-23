import { useNavigate } from 'react-router-dom';
import Pilt from "../components/Pilt"


function Lend(props) {
    const liigu = useNavigate();

    const liiguBroneerimisLehele = () => {
        liigu(`/lennud/${props.id}/${props.hind}`);
    };

    return (
    <div className="lend-konteiner">
        <div className="lend">
            <Pilt baidid={props.logo} pildiAlt="Lennufirma logo" klassid="logo-pilt" />
            <span>{props.alguskoht}</span>
            <span><i className="nool paremale"></i></span>
            <span>{props.sihtkoht}</span>
            <span className='kuupaev'>{props.kuupaev.toLocaleDateString()}</span>
        </div>

        <div className="lend">
            <span>{props.hind} €</span>
            <button className="broneeri-nupp" onClick={liiguBroneerimisLehele}>Broneeri</button>
        </div>
    </div>
    );

}

export default Lend;