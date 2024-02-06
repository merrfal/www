import * as Users from "../controllers/User"
import * as Products from "../controllers/Product"

import { DatabaseConnection } from "./Connection"
import { Create, Delete, Update } from '../controllers/product/index'

export const RouteMethod = (target, payload, res, req) => {
  DatabaseConnection()

  const schema = target.split("/")[0]
  const action = target.split("/")[1]

  if (schema === "USERS") RouteUsers(action, payload, res, req)
  if (schema === "PRODUCTS") RouteProducts(action, payload, res, req)
};

const RouteUsers = (action, payload, res, req) => {
  switch (action) {
    case "CREATE": Users.Register(payload, res, req); break
    case "LOGIN": Users.Login(payload, res, req); break
    case "VIEW": Users.View(payload, res, req); break
    case "UPDATE": Users.Update(payload, res, req); break
    case "DELETE": Users.Delete(payload, res, req); break
    case "PRODUCTS": Users.Products(payload, res, req); break
    case "EXISTS": Users.CheckIfExist(payload, res, req); break
  }
};

const RouteProducts = (action, payload, res, req) => {
  switch (action) {
    case "CREATE": Create(payload, res, req); break
    case "VIEW": Products.View(payload, res, req); break
    case "SIMILAR": Products.Similar(payload, res, req); break
    case "LATEST": Products.Latest(payload, res, req); break
    case "DELETE": Delete(payload, res, req); break
    case "SEARCH": Products.Search(payload, res, req); break
    case "UPDATE": Update(payload, res, req); break
    case "CATEGORY": Products.Category(payload, res, req); break
  }
};