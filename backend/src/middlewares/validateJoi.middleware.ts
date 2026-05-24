import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export const validateJoi = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    req.body = value;
    next();
  };
};
