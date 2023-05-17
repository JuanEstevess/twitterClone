/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 *
 */

const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

faker.locale = "es";

async function fakeFollowers() {
  const followers = [];
  const users = await User.find({});
  for (let i = 0; i < Math.floor(Math.random() * users.length); i++) {
    const element = users[i];
    followers.push(element._id);
  }
  console.log(followers.length);
  return followers;
}

module.exports = async () => {
  await User.deleteMany();
  const users = [];

  for (let i = 0; i < 100; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: await bcrypt.hash("123456", 5),
      img: faker.image.avatar(),
      description: faker.lorem.sentence().slice(0, 120),
    });
  }
  await User.insertMany(users);

  for (let i = 0; i < 100; i++) {
    users.push({
      followers: await fakeFollowers(),
    });
  }

  await User.insertMany(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
