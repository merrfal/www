import * as Users from "../controllers/User";
import * as Categories from "../controllers/Category";
import * as Products from "../controllers/Product";

import { DatabaseConnection } from "./Connection";

export const RouteMethod = (target, payload, res) => {
  DatabaseConnection();

  const schema = target.split("/")[0];
  const action = target.split("/")[1];

  if (schema === "USERS") RouteUsers(action, payload, res);
  if (schema === "PRODUCTS") RouteProducts(action, payload, res);
  if (schema === "CATEGORIES") RouteCategories(action, payload, res);
};

const RouteUsers = (action, payload, res) => {
  switch (action) {
    case "CREATE":
      Users.RegisterBack(payload, res);
      break;

    case "LOGIN":
      Users.LoginBack(payload, res);
      break;

    case "VIEW":
      Users.ViewBack(payload, res);
      break;

    case "UPDATE":
      Users.UpdateBack(payload, res);
      break;

    case "DELETE":
      Users.DeleteBack(payload, res);
      break;

    case "PRODUCTS":
      Users.Products(payload, res);
      break;
  }
};

const RouteProducts = (action, payload, res) => {
  switch (action) {
    case "CREATE":
      Products.CreateBack(payload, res);
      break;

    case "VIEW":
      Products.ViewBack(payload, res);
      break;

    case "SIMILAR":
      Products.SimilarBack(payload, res);
      break;

    case "LATEST":
      Products.LatestBack(payload, res);
      break;

    case "DELETE":
      Products.DeleteBack(payload, res);
      break;
  }
};

const RouteCategories = (action, payload, res) => {
  switch (action) {
    case "LIST":
      Categories.List(payload, res);
      break;
  }
};