import { Request, Response } from "express";

export async function loginUser(req: Request, res: Response) {
  return res.json({
    body: req.body
  })
}