import React from 'react';

const Todo = ({
  id,
  title,
  description,
  mongoId,
  complete,
  deleteTodo,
  completeTodo,
}) => {
  return (
    <tr className="odd:bg-white even:bg-gray-50 border-b hover:bg-gray-100 transition duration-200">
      <th
        scope="row"
        className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap"
      >
        {id + 1}
      </th>
      <td
        className={`px-6 py-4 ${
          complete ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {title}
      </td>
      <td
        className={`px-6 py-4 ${
          complete ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {description}
      </td>
      <td className="px-6 py-4">
        <span
          className={`py-1 px-3 rounded-full text-sm font-medium ${
            complete
              ? 'bg-emerald-100 text-emerald-600'
              : 'bg-red-100 text-red-600'
          }`}
        >
          {complete ? 'Completed' : 'Pending...'}
        </span>
      </td>
      <td className="flex px-6 py-4 gap-3">
        <button
          onClick={() => deleteTodo(mongoId)}
          className="py-2 px-4 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition duration-150"
        >
          Delete
        </button>
        {!complete && (
          <button
            onClick={() => completeTodo(mongoId)}
            className="py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-150"
          >
            Done
          </button>
        )}
      </td>
    </tr>
  );
};

export default Todo;
