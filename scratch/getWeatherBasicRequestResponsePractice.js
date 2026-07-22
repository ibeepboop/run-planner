async function getPlace(name) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=5`
    // const url = `https://this-is-a-made-up-url.com/v1/api/some-endpoint`
    // const url = `https://geocoding-api.open-meteo.com/v1/nonsense`
    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.log("Bad status:", response.status)
            return
        }

        const data = await response.json()

        if (!data.results) {
            console.log("No matches for that name.")
            return
        }

        console.log(data.results)
    } catch (err) {
        console.log("No response at all:", err.message)
    }
}

getPlace("Boulder")