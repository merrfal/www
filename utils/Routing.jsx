import * as Users from "../controllers/User";
import * as Products from "../controllers/Product";

import { DatabaseConnection } from "./Connection";

export const RouteMethod = (target, payload, res) => {
  DatabaseConnection();

  const schema = target.split("/")[0];
  const action = target.split("/")[1];

  if (schema === "USERS") RouteUsers(action, payload, res);
  if (schema === "PRODUCTS") RouteProducts(action, payload, res);
};

const RouteUsers = (action, payload, res) => {
  switch (action) {
    case "CREATE": Users.Register(payload, res); break;
    case "LOGIN": Users.Login(payload, res); break;
    case "VIEW": Users.View(payload, res); break;
    case "UPDATE": Users.Update(payload, res); break;
    case "DELETE": Users.Delete(payload, res); break;
    case "PRODUCTS": Users.Products(payload, res); break;
    case "EXISTS": Users.CheckIfExist(payload, res); break;
  }
};

const RouteProducts = (action, payload, res) => {
  switch (action) {
    case "CREATE": Products.Create(payload, res); break;
    case "VIEW": Products.View(payload, res); break;
    case "SIMILAR": Products.Similar(payload, res); break;
    case "LATEST": Products.Latest(payload, res); break;
    case "DELETE": Products.Delete(payload, res); break;
    case "SEARCH": Products.Search(payload, res); break;
    case "UPDATE": Products.Update(payload, res); break;
    case "CATEGORY": Products.Category(payload, res); break;
  }
};