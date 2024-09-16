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
        <textarea name="description" placeholder="Enter Description" className="border-2 px-3 py-2 w-full rounded-md"></textarea>
        <button type="submit" className="bg-emerald-500 text-white py-3 px-11 rounded-md font-semibold">Add Task</button>
      </form>
    </>
  );
}
