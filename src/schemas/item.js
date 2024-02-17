module.exports = {
  title: "item",
  description: "Un item de la base de données",
  type: "object",
  properties: {
    name: { type: "string" },
  },
  required: ["name"],
  additionalProperties: false
}
