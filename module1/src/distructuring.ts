// destructuring
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
