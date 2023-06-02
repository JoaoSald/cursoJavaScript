const APIKey = 'C9EyqsVd7kd1WW0mWAd8XAqAM83bpOyw'
const getCityUrl = cityName => 
`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async (cityName) =>{
    try {
      const cityUrl = getCityUrl(cityName)
      const response = await fetch(cityUrl)

      if(!response.ok){
        throw new Error('Não foi possivel obter dados')
      }

      const [cityData] = await response.json()
     return cityData
    }catch ({name, message}){
        alert(`${name}: ${message}`)
    }
}

getCityData("São Paulo")