const friend = require('./your_new_friend')

if (process.argv[2]) {
  name = process.argv[2]
  console.log(friend.greet(name));
} else {
  console.log("please use an argument for a name");
}
