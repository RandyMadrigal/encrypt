import Joi from "joi";

export const createUserSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30).required(),
  userName: Joi.string().trim().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
