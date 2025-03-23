const BAAS_URL = "http://localhost:8080/api"

export const getLennud = async () => {
    const response = await fetch(`${BAAS_URL}/lend`)
    const andmed = await response.json()
    return andmed;
}

export const getHoivatudKohad = async (lennuId) => {
    const response = await fetch(`${BAAS_URL}/kohad/${lennuId}`)
    const andmed = await response.json()
    return andmed;
}

export const postBroneering = async (lennuId) => {
    fetch(`${BAAS_URL}/broneering`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(lennuId)
    })
}