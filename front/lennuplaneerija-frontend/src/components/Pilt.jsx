import { useState, useEffect } from "react"

function Pilt(props) {
    const [piltSrc, setPiltSrc] = useState("")

    useEffect(() => {
        if (props.baidid) {
            const baidiSumbolid = atob(props.baidid);
            const baidiNumbrid = new Array(baidiSumbolid.length);
            for (let i = 0; i < baidiSumbolid.length; i++) {
                baidiNumbrid[i] = baidiSumbolid.charCodeAt(i);
            }
            const baidiMassiiv = new Uint8Array(baidiNumbrid);
            const blob = new Blob([baidiMassiiv], { type: "image/jpeg"})
            const url = URL.createObjectURL(blob)
            setPiltSrc(url)

            return () => URL.revokeObjectURL(url)
        }
    }, [props.baidid])

    return (
        <img src={piltSrc || null} alt={props.pildiAlt} className={props.klassid} />
    )
}

export default Pilt