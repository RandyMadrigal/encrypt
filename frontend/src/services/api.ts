import { EncryptPayload } from "../types";

const API_URL = import.meta.env.VITE_API_ENCRYPT_URL;

if (!API_URL) {
  throw new Error("[Config] VITE_API_ENCRYPT_URL is not defined. Check your .env file.");
}

const parseErrorMessage = async (response: Response): Promise<string> => {
  try {
    const body = await response.json();
    return body.message || `Error ${response.status}`;
  } catch {
    return `Error ${response.status}`;
  }
};

export const encryptPassword = async (data: EncryptPayload): Promise<string> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(await parseErrorMessage(response));
    }

    const body = await response.json();
    return body.text;
  } finally {
    clearTimeout(timeout);
  }
};
