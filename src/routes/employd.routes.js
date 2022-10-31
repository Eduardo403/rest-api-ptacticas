import { Router } from "express";
import {
  deleteEmployees,
  getEmployeeById,
  getEmployees,
  postEmployees,
  putEmployees,
} from "../controller/employees.crontoller.js";

const routes = Router();
routes.get("/employees", getEmployees);
routes.get("/employees/:id", getEmployeeById);

routes.patch("/employees/:id", putEmployees);
routes.post("/employees", postEmployees);
routes.delete("/employees/:id", deleteEmployees);
export default routes;
