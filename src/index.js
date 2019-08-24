import sayHello from "./app.js";
import "./style.css";
import _ from "lodash";

const person = undefined;

const user = {
  admin: true,
};

const currentUser = _.merge(person, user);

console.log(sayHello(person?.name));
