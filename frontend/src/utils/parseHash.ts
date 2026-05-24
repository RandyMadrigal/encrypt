const VALID_BCRYPT_VERSIONS = new Set(["2", "2a", "2b", "2y"]);

export const parseHash = (hash: string) => {
  const parts = hash.split("$");

  if (parts.length < 4) return null;

  const version = parts[1];
  const cost = parts[2];

  if (!VALID_BCRYPT_VERSIONS.has(version) || isNaN(Number(cost))) return null;

  const saltAndHash = parts[3];
  const salt = saltAndHash.substring(0, 22);
  const hashed = saltAndHash.substring(22);

  return { version, cost, salt, hashed };
};
