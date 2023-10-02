/* class Address {
  constructor(zip, street){
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name, age, phone, address){
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
} */


/* const user = new User('Bob', undefined, undefined, new Address('1', "Main"))//can be long and filled with many vague "undefined"s

console.log(user) */

//Traditional Builder
/* class UserBuilder {
  constructor(name){
    this.user = new User(name)
  }

setAge(age){
  this.user.age = age
  return this //return same object
}
setPhone(phone){
  this.user.phone = phone
  return this
}
setAddress(address){
  this.user.address = address
  return this
}

build(){
  return this.user
}
}

let builder = new UserBuilder('Bob').setAge(10).setPhone('8675309').build()
console.log(user) */

//Modern Builder
/* class Address {
  constructor(zip, street){
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name, { age, phone = '8675309', address } = {}) { //can set default to anything or undefined.  passing parameter later will override it for that user
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

let user = new User ('Bob', {age: 10, address: new Address('1', "Main")})
console.log(user) */

//Facade Pattern
function getUsers() {
  return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId){
  return getFetch('https://jsonplaceholder.typicode.com/posts', {
    userId: userId
  })
}


getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then(posts => {
      console.log(user.name)
      console.log(posts.length)
    })
  })
})

function getFetch(url, params = {}) {
  const queryString = Object.entries(params).map(param => {
    return `${param[0]}=${param[1]}`
  }).join('&')
  return fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json())
}