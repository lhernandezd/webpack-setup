import sayHello from "./app.js";
import "./style.css";
import _ from "lodash";

const person = {
  name: "Gustavo",
};

const user = {
  admin: true,
};

const currentUser = _.merge(person, user);

console.log(sayHello(currentUser.name));
