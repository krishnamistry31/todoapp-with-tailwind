import React from "react";
const TaskList = () => {
  return (
    <div className="w-full text-center flex items-center flex-col gap-5">
      <h1 className="text-blue-600 uppercase font-semibold text-2xl">Task List</h1>
      <div className="w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
          <div className="flex justify-between items-center mb-5">
            <li className="list-none w-2/3 text-left break-normal">Task 1</li>
            <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-2 py-2 font-medium rounded-md">Done</button>
                <button className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md">Delete</button>
            </div>
          </div>
      </div>
    </div>
  );
};
export default TaskList;