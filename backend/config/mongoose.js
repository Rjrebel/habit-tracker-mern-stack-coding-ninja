const mongoose = require('mongoose');

main().catch(err => console.log(err));

main().then( () => {
    console.log("Connected to mongoDB successfully.");
})

// connecting to MongoDB server
async function main() {
  await mongoose.connect('mongodb://localhost:27017/habit_tracker');
}