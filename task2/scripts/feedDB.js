const {faker} = require("@faker-js/faker");
const user = require("../models/userdata");
const bcrypt = require("bcryptjs")
const users = [];
const feedDb = async()=>{
    for(let i in Array(5).fill(0).map((_, i) => i * i)){
        const newPass = await bcrypt.hash(faker.internet.password(), 10);
users.push({
username: faker.internet.userName(),
firstName: faker.name.firstName(),
lastName: faker.name.lastName(),
email: faker.internet.email(),
password: newPass,
confirm_Password: newPass
})

}
for(let usr of users){
    const newUser = new user(usr)
    console.log(await newUser.save())
}
// await user.insertMany(users)
};

feedDb()
