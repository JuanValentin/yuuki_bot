const { Guild } = require("discord.js");

module.exports = {
    asegurar,

}

const cache = {};

async function asegurar(schema, idserver, objeto) {
  if (cache[idserver]) {
    return cache[idserver];
  }
  let data = await schema.findOne({ id: idserver });
  if (!data) {
    console.log("No se encontró la entrada en la base de datos. Insertando...");
    data = await new schema(objeto);
    await data.save();
  }
  cache[idserver] = data;
  return data;
}
