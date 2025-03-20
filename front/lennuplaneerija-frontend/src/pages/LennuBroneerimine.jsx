import Pais from "../components/Pais";
import IstmeSektsioonid from "../components/IstmeSektsioonid";

function LennuBroneerimine() {
    return (
    <div className="pohi">
        <Pais />
        <div className="sisu broneerimine">
            <div className="lennuki-siluett">
                <div className="nina"></div>
                <IstmeSektsioonid hoivatudKohad={["2B"]} mitteSobivadKohad={["15C", "16C"]}/>
                <div className="saba"></div>
            </div>
        
        </div>
    </div>
    );
}

export default LennuBroneerimine;