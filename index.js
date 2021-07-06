const fetch = require('node-fetch')

const BASE_API_URL = 'https://www.balldontlie.io/api/v1/games?seasons[]=2020&postseason=false&per_page=100&page='

const fetchGamesByPage = () => fetch(BASE_API_URL + 1)

const fetchAllGames = async () => {
  const response = await fetchGamesByPage()
  const json = await response.json()
  
  return json.data
}


(async () => {
  const games = await fetchAllGames()
  console.log('games', games)
})()

