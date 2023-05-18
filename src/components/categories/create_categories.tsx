"use client";

import { useRef } from "react";
import { Create } from "../global/input";
import { ICategories } from "../../../utils/categories/interface";
import { toast } from "react-toastify";
import { create_categories } from "../../../utils/categories/categories.api";

export const CreateCategoriesView = () => {
  const name = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-3 mx-auto">
      <h3 className="text-xl text-gray-500">Create Category</h3>
      <div className="flex gap-3">
        <Create ref={name} />
        <button
          className="bg-green-400 px-2 py-1 text-center rounded text-gray-500"
          onClick={() => create_categories(name.current?.value ?? "")}
        >
          Create
        </button>
      </div>
    </div>
  );
};
