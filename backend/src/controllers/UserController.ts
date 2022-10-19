import { Request, Response } from "express";

import EmailService from "../services/EmailService";

const users = [{ name: "Julian", email: "julian-andrade@hotmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Julian Andrade",
        email: "julian-andrade@hotmail.com",
      },
      message: {
        subject: "Estudo de TypeScript",
        body: "Estudando o typescript",
      },
    });
    return res.send();
  },
};
