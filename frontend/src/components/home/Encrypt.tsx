interface propEncrypt {
  encrypt: string;
}

export const Encrypt = ({ encrypt }: propEncrypt) => {
  return (
    <textarea
      className="w-11/12 h-24 md:h-12 lg:w-full font-bold bg-gray-900 bg-opacity-5  text-white p-2 text-center resize-none"
      disabled
      value={encrypt}
    />
  );
};
