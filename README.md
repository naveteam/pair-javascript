# Pareamento JavaScript nave.rs

## Cronograma

O pareamento é uma reunião de uma hora com a seguinte divisão de tempo:

* 5 minutos iniciais: apresentação do candidato/entrevistador e explicação do problema
* 50 minutos: pareamento técnico (está mais bem descrito abaixo)
* 5 minutos finais: tempo para o candidato tirar as dúvidas 



## O que você precisa fazer

* Clonar esse repositório
* Antes de chegar na entrevista, garanta que você consegue executar o ambiente corretamente para realizarmos o pareamento
  * rode `npm install` para instalar os pacotes
  * execute `node index.js` para rodar o script
* Escolha seu sistema operacional e editor/IDE habitual, onde se sinta mais confortável para programar.
* Esteja em um ambiente calmo e confortável


## Sobre o pareamento 
* é para ser uma construção conjunta,então, sinta-se à vontade de perguntar para quem está conduzindo qualquer pergunta relacionada ao exercício
* A ideia é que possamos simular um dia normal de desenvolvimento, então, você pode fazer buscas e pesquisas sem problema nenhum.
* O que vamos avaliar:
  * Habilidade de comunicação;
  * Organização do código;
  * Legibilidade do código;
  * Trabalho em equipe (construção coletiva);
* O que não vamos avaliar:
  * Se a possui conseguiu ir até o final ou não;
  * Conhecimento de síntaxe da linguagem;
  * Se o código performa mal ou bem
## Exercício

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