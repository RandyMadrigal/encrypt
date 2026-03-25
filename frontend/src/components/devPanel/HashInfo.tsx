interface Props {
  cost?: string;
}

export const HashInfo = ({ cost }: Props) => {
  return (
    <>
      <p>Algorithm: bcrypt</p>
      <p>Cost (rounds): {cost}</p>
      <p>Salt: included in hash</p>
    </>
  );
};
