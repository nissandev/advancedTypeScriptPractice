// destructuring

// object
const user = {
  id: 10,
  name: {
    firstName: "Nissan",
    lastName: "Khan",
  },
  contact: "01629880885",
  address: "Dhaka-1205",
};

const { contact,name:{firstName} } = user;


// array destructuring
const myFriends =[
    "Fhysal",
    "Emon",
    "Lemon",
    "Milon"
]


const [,,bestFriend,...rest]=myFriends
console.log(bestFriend)