async function getPlace(name) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=5`

    const response = await fetch(url)
    const data = response.json()

    console.log(response)
    console.log(data.results.map( r => r.name + ", " + r.admin1 ))
} 

getPlace("Boulder")