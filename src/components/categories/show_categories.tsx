import { Search } from "../global/input";
import { TableCategories } from "./table_category";

export const ShowCategories = () => {
  return (
    <div className="flex flex-col w-full lg:w-1/2 mx-auto gap-3">
      <h3 className="text-xl text-gray-500"> Categories</h3>

      <Search />

      <TableCategories />
    </div>
  );
};
