'use client'

import { useState } from 'react'

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!title.trim()) return

    addTask(title, description)
    setTitle('')
    setDescription('')
  }

  // Extracted input classes for cleaner JSX
  const inputClasses = "block w-full border border-gray-400 rounded-md p-2.5 mt-1.5 bg-white text-black placeholder:text-gray-500 transition-all duration-200 focus:outline-none focus:border-gray-700 focus:ring-2 focus:ring-gray-300"

  return (
    <form onSubmit={handleSubmit} className="mt-7 border-t border-gray-300 pt-5">
      <h2 className="mt-0 mb-4 text-2xl font-semibold text-black">Add a task</h2>
      <label className="block my-3 text-black font-medium text-sm sm:text-base">
        Title
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Task title"
          className={inputClasses}
        />
      </label>
      <label className="block my-3 text-black font-medium text-sm sm:text-base">
        Description
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="What needs to be done?"
          rows="3"
          className={inputClasses}
        />
      </label>
      <button
        type="submit"
        className="mt-2 px-4 py-2 border border-gray-400 bg-white text-black rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200"
      >
        Add Task
      </button>
    </form>
  )
}