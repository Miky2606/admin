import { toast } from "react-toastify";
import { ICategories } from "./interface";

export const create_categories = (name: string) => {
  if (name === "" || name === undefined)
    return toast.error("Category is obligated");
  toast("Category is obligated");
};
