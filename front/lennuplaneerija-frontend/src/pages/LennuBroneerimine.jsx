import Pais from "../components/Pais";

function LennuBroneerimine() {
    return (
    <div className="pohi">
        <Pais />
        <div className="sisu broneerimine">
            <div className="lennuki-siluett">
                <div className="nina"></div>
                <div className="istmed-konteiner">
                    <div className="istme-sektsioon"></div>
                    <div className="istme-sektsioon"></div>  
                    <div className="istme-sektsioon"></div>  
                    <div className="istme-sektsioon"></div>                      
                </div>
                <div className="saba"></div>
            </div>
        </div>
    </div>
    );
}

export default LennuBroneerimine;