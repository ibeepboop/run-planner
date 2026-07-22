function makeMeowSound (meow: string): number {
    const meowMeow = `${meow}`
    if (meowMeow) {
        return 1
    }
    return 0
}
makeMeowSound('woof')

interface GeocodingResponse {
    results?:GeocodingResult[]
}

interface GeocodingResult {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    elevation: number,
    timezone: string,
    country: string,
    country_code: string,
    admin1?: string,
    admin2?: string,
    population: number
}
function getLocation (result: GeocodingResult) {

    if (!result.admin1 || !result.admin2) {
        console.log("No city or state returned")
        return 0
    }

    const city = result.admin1
    const cityLength = result.admin1.length
    const state = result.admin2
    const stateLength = result.admin2.length

    if (!city || !state) {
        console.log("location not found")
        return 0
    } else {
        console.log(`${city}, ${state}`)
        console.log(`City Length: ${cityLength}, State Length: ${stateLength}`)
    }

    return 1
} 
getLocation({
    id: 5574991,
    name: "Boulder",
    latitude: 40.01499,
    longitude: -105.27055,
    elevation: 1624.0,
    timezone: "America/Denver",
    country: "United States",
    country_code: "US",
    population: 106803
})