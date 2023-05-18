import { forwardRef } from "react";

export const Search = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <input
      type="search"
      id="default-search"
      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none  "
      placeholder="Search Mockups, Logos..."
      required
    />
  );
});

export const Create = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <input
      type="search"
      id="default-search"
      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none  "
      placeholder="Create"
      required
      ref={ref}
    />
  );
});
