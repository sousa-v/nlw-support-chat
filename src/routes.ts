import { Router } from "express"

import { SettingsController } from "./controllers/SettingsController"
import { UsersController } from "./controllers/UsersController"

const routes = Router()

const settigsController = new SettingsController()
const usersController = new UsersController()

routes.post("/settings", settigsController.handle)
routes.post("/users", usersController.handle)

export { routes }