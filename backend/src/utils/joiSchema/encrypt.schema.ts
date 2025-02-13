import Joi from "joi";

export const encryptSchema = Joi.object({
  text: Joi.string().trim().min(1).required(),
});
