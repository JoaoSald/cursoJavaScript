const APIKey = 'C9EyqsVd7kd1WW0mWAd8XAqAM83bpOyw' 
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName =>
`${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = cityKey => 
    `${baseUrl}/currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async url =>{
    try {
      const response = await fetch(url) 

      if(!response.ok){
        throw new Error('Não foi possivel obter dados')
      } 

      return response.json() 
    }catch ({name, message}){
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))
const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey)) 
