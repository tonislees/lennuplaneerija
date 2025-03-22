import Pais from "../components/Pais";
import Broneering from "../components/Broneering";
import helsingiPilt from "../assets/Helsingi.jpg";

function Broneeringud() {
    const kohad = ["2A", "1B", "2A", "1B", "2A", "1B", "2A", "1B", "2A", "1B", "2A", "1B", "2A", "1B"]
    return (
    <div className="pohi">
        <Pais />
        <div className="sisu">
            <Broneering 
                algus="Tallinn" 
                sihtkoht="Helsingi" 
                pilt={helsingiPilt} 
                kestus="2" 
                kuupaev="22.04.2025" 
                kohad={kohad}
            />
        </div>
    </div>
    );
}

export default Broneeringud;