import Pais from "../assets/Pais";
import LennudFiltrid from "../assets/LennudFiltrid";

function Lennud() {
    return (
    <div className="pohi">
        <Pais />
        <div className="sisu">
            <LennudFiltrid />
        </div>
    </div>
    );

}

export default Lennud;