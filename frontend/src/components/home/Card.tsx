import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";

export const Card = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-2 p-5 w-10/12 bg-gray-900 bg-opacity-60  border border-gray-950 rounded-lg shadow md:w-6/12 md:h-2/6">
      <CardHeader />
      <CardBody />
    </div>
  );
};
