import React from 'react';

const Todo = () => {
  return (
    <tr className="odd:bg-white even:bg-gray-50 border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        1
      </th>
      <td className="px-6 py-4">Study</td>
      <td className="px-6 py-4">Python</td>
      <td className="px-6 py-4">Pending...</td>
      <td className="flex px-6 py-4 gap-3">
        <button className='py-2 px-4 bg-emerald-500 text-white rounded-md'>Delete</button>
        <button className='py-2 px-4 bg-red-500 text-white rounded-md'>Done</button>
      </td>
    </tr>
  );
};

export default Todo;
