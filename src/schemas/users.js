module.exports = {
  title : "utilisateur",
  description: "Description de l'utilisateur",
  type: "object",
  properties: {
    id: {
      type: "string"
    },
    nom: {
      type: "string"
    },
    email :{
      type : "string"
    },
    age: {
      type: "string"
    }
  },
  required: ["id", "nom", "email"]
}