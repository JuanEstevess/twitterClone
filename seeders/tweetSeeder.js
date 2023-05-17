const { faker } = require("@faker-js/faker");
const Tweet = require("../models/Tweet");
const User = require("../models/User");

faker.locale = "es";

module.exports = async () => {
  const tweets = [];
  const user = await User.find();
  for (let i = 1; i < 100; i++) {
    tweets.push({
      content: faker.lorem.text({ length: 100 }),
      likes: faker.datatype.number({ min: 18, max: 100 }),
      date: faker.date.between("2010-01-01T00:00:00.000Z", "2023-01-05T00:00:00.000Z"),
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    });
  }
  await Tweet.insertMany(tweets);
  console.log("[Database] Se corrió el seeder de Tweets.");
};
