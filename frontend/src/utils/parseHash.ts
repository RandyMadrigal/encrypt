export const parseHash = (hash: string) => {
  const parts = hash.split("$");

  if (parts.length < 4) return null;

  const version = parts[1];
  const cost = parts[2];
  const saltAndHash = parts[3];

  const salt = saltAndHash.substring(0, 22);
  const hashed = saltAndHash.substring(22);

  return { version, cost, salt, hashed };
};
