const APIKey = 'C9EyqsVd7kd1WW0mWAd8XAqAM83bpOyw' // armazena chave da API
const getCityUrl = cityName => // getcityurl é uma função que recebe os parametros de forma dinâmica e retrona a url 
//contendo os valores que o parametro recebeu
`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`
// vamos passar as informações atraves dos query parameters na url
// os parametros passados serao a chave da API e a cidade que queremos pesquisar 

const getCityData = async (cityName) =>{
    try {
      const cityUrl = getCityUrl(cityName) // recebe o retorna da invocação getCityUrl
      const response = await fetch(cityUrl) // requisição na API atraves do fetch

      if(!response.ok){
        throw new Error('Não foi possivel obter dados')
      } // verifica se deu tudo certo na requisição

      const [cityData] = await response.json() // armazena primeiro obj do array 
      return cityData
    // console.log(cityData)
    }catch ({name, message}){
        alert(`${name}: ${message}`)
    }
}

const getCityWeather = async cityName => {
  try {
    const { Key } = await getCityData(cityName) // armazrena chave da cidade 
    const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}` 
    const response = await fetch(cityWeatherUrl) 

    if(!response.ok){
      throw new Error('Não foi possivel obter dados')
    } // verifica se deu tudo certo na requisição

    const [cityWeatherData] = await response.json() 
   // debugger
    return cityWeatherData
  }catch ({name, message}){
      alert(`${name}: ${message}`)
  }
}

getCityWeather("São Paulo")