'use client'

export default function TaskCard({ task, changeTask, deleteTask }) {
  return (
    <article className={`flex flex-col sm:flex-row justify-between gap-4 sm:gap-5 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4 ${task.completed ? 'opacity-75' : ''}`}>
      <div className="flex flex-col items-start">
        <h2 className={`m-0 mb-2 text-xl font-semibold ${task.completed ? 'line-through text-gray-400' : 'text-black'}`}>
          {task.title}
        </h2>
        <p className="m-0 mb-3 text-gray-700">
          {task.description || 'No description'}
        </p>
        <strong className="text-xs px-2.5 py-1 rounded-full font-semibold text-black bg-gray-200">
          {task.completed ? 'Completed' : 'Pending'}
        </strong>
      </div>
      <div className="flex items-center gap-2 flex-wrap sm:justify-end mt-2 sm:mt-0">
        <button
          onClick={() => changeTask(task.id)}
          className="px-3 py-1.5 sm:px-3 sm:py-2 border border-gray-400 bg-white text-black rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200 text-sm"
        >
          {task.completed ? 'Mark Pending' : 'Mark Completed'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-3 py-1.5 sm:px-3 sm:py-2 border border-gray-400 bg-white text-black rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200 text-sm"
        >
          Delete
        </button>
      </div>
    </article>
  )
}