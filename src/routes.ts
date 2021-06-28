import { Router } from "express"

import { SettingsController } from "./controllers/SettingsController"

const routes = Router()

const settigsController = new SettingsController()

routes.post("/settings", settigsController.handle)

export { routes }