
module.exports= {
    "title" : "watchlists",
    "description": "Description de la ressource watchlist",
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "nom": {
          "type": "string"
        },
        "utilisateurId": {
          "type": "string"
        },
        "items": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": ["id", "nom", "utilisateurId", "items"]
    }