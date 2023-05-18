import { Create, Search } from "../global/input";
import { CreateCategoriesView } from "./create_categories";
import { ShowCategories } from "./show_categories";

export const CategoriesView = () => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <CreateCategoriesView />
      <ShowCategories />
    </div>
  );
};
