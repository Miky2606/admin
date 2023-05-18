export const TableCategories = () => {
  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full mx-auto text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Category name
            </th>

            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableItemCategories />
        </tbody>
      </table>
    </div>
  );
};

export const TableItemCategories = () => {
  return (
    <tr className="bg-white border-b  border-gray-700  hover:bg-gray-300">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        Apple MacBook Pro 17"
      </th>

      <td className="px-6 py-4 text-right">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
};
