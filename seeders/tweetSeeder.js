const { faker } = require("@faker-js/faker");
const { Tweet, User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const tweets = [];
  for (let i = 1; i < 100; i++) {
    tweets.push({
      content: faker.lorem.text({ min: 20, max: 140 }),
      likes: faker.datatype.number({ min: 18, max: 100 }),
      date: faker.date.between("2010-01-01T00:00:00.000Z", "2023-01-05T00:00:00.000Z"),
    });
  }
  await Tweet.insertMany(tweets);
  console.log("[Database] Se corrió el seeder de Tweets.");
};
