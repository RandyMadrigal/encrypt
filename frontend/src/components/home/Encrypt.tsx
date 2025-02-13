interface propEncrypt {
  encrypt: string;
}

export const Encrypt = ({ encrypt }: propEncrypt) => {
  return (
    <input
      type="text"
      className="w-11/12 font-bold bg-gray-900  text-white p-2 text-center"
      disabled
      value={encrypt}
    />
  );
};
