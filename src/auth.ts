import express from 'express'
import User from './Users'

User.sync()

export default class Auth {
  public handleLogin (req: express.Request, res: express.Response): void {
    console.log(req.body)
    res.send('login not configured... yet :)')
  }
}
