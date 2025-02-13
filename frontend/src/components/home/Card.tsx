import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";

export const Card = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-6/12 h-2/6 gap-5 bg-gray-900 border border-gray-950 rounded-lg shadow">
      <CardHeader />
      <CardBody />
    </div>
  );
};
