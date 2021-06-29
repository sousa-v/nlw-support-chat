import { Router } from "express"
import { MessagesController } from "./controllers/MessagesController"

import { SettingsController } from "./controllers/SettingsController"
import { UsersController } from "./controllers/UsersController"

const routes = Router()

const settigsController = new SettingsController()
const usersController = new UsersController()
const messagesController = new MessagesController

routes.post("/settings", settigsController.handle)

routes.post("/users", usersController.handle)

routes.get("/messages/:id", messagesController.showByUser)
routes.post("/messages", messagesController.handle)


export { routes }