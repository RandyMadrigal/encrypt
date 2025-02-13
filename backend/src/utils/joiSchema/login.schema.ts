import Joi from "joi";

export const loginSchema = Joi.object({
  userName: Joi.string().trim().required(),
  password: Joi.string().required(),
});
