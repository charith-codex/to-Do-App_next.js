import Todo from '@/components/Todo';

export default function Home() {
  return (
    <>
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="border-2 px-3 py-2 w-full rounded-md"
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          className="border-2 px-3 py-2 w-full rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-emerald-500 text-white py-2 px-6 rounded-md font-semibold"
        >
          Add Task
        </button>
      </form>

      {/* table */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-20 w-[60%] mx-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                TITLE
              </th>
              <th scope="col" class="px-6 py-3">
                DESCRIPTION
              </th>
              <th scope="col" class="px-6 py-3">
                STATUS
              </th>
              <th scope="col" class="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo />
            <Todo />
            <Todo />
          </tbody>
        </table>
      </div>
    </>
  );
}
