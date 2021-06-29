import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async handle(request: Request, response:Response): Promise<Response>{
    const { chat, username } = request.body

    const settingsService = new SettingsService()

    try{
      const settings  = await settingsService.create({
        chat,
        username
      })
    
      return response.json(settings)
    }catch(err){
      return response.status(400).json({ error: err.message })
    }
  }
}

export { SettingsController }