interface ErrorProps {
  msg: string;
}

export const Error = ({ msg }: ErrorProps) => {
  return (
    <>
      <h2 className="font-bold text-center text-red-700 text-4xl "> {msg} </h2>
    </>
  );
};
