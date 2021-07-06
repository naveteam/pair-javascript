O objetivo do desafio é utilizar uma API com dados da NBA(https://www.balldontlie.io/) para descobrir qual foi o time que na temporada regular da NBA em 2020 conquistou o maior número de vitórias. A vitória é definida baseada no time com maior número de pontos ao final do jogo.

Para fazer isso, você vai utilizar o endpoint `/api/v1/games?seasons[]=2020&postseason=false&per_page=100&page={page_number}`. Você deve iterar por todas as páginas passando o paramêtro `page` até a API responder que o campo `meta.next_page` é igual a `null`.

Exemplo de response da API:

```json
{
  "data": [
    {
      "id": 127502,
      "date": "2020-12-22T00:00:00.000Z",
      "home_team": {
        "id": 3,
        "abbreviation": "BKN",
        "city": "Brooklyn",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Brooklyn Nets",
        "name": "Nets"
      },
      "home_team_score": 125,
      "period": 4,
      "postseason": false,
      "season": 2020,
      "status": "Final",
      "time": "",
      "visitor_team": {
        "id": 10,
        "abbreviation": "GSW",
        "city": "Golden State",
        "conference": "West",
        "division": "Pacific",
        "full_name": "Golden State Warriors",
        "name": "Warriors"
      },
      "visitor_team_score": 99
    },
    ...,
  ],
    "meta": {
      "total_pages": 11,
      "current_page": 1,
      "next_page": 2,
      "per_page": 100,
      "total_count": 1081
    }
}
```

Após isso, você deve manipular os jogos para descobrir qual o time com mais vitorias na temporada regular. Você pode utilizar o campo `abbreviation` como identificador único, pois ele não se repete em nenhum dos times.