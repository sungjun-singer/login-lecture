"use strict"

class UserStorage {
    static #users = {
        id : ['woorimIT', "김성준", "오주연"],
        password : ["1234", "1234", "123456"],
        name : ['우리밋', "기린", "찐빵"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
           if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
           }
           return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;