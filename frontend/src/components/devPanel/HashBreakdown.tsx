interface Props {
  version: string;
  cost: string;
  salt: string;
  hashed: string;
}

export const HashBreakdown = ({ version, cost, salt, hashed }: Props) => {
  return (
    <div className="mt-4 space-y-2 text-[11px]">
      <p className="text-white">🧩 Hash Breakdown</p>

      <div className="bg-black/30 p-2 rounded">
        <span className="text-blue-400">version:</span> {version}
      </div>

      <div className="bg-black/30 p-2 rounded">
        <span className="text-purple-400">cost:</span> {cost}
      </div>

      <div className="bg-black/30 p-2 rounded break-all">
        <span className="text-green-400">salt:</span> {salt}
      </div>

      <div className="bg-black/30 p-2 rounded break-all">
        <span className="text-yellow-400">hash:</span> {hashed}
      </div>
    </div>
  );
};
