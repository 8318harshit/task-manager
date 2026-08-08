'use client'

import { useEffect, useRef, useState } from 'react'
import FilterButtons from '../components/FilterButtons'
import Header from '../components/Header'
import Stats from '../components/Stats'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const startingTasks = [
  
]

export default function Home() {
  const [tasks, setTasks] = useState(startingTasks)
  const [filter, setFilter] = useState('all')
  const loaded = useRef(false)

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) {
      window.setTimeout(() => setTasks(JSON.parse(savedTasks)), 0)
    }
    loaded.current = true
  }, [])

  useEffect(() => {
    if (loaded.current) localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(title, description) {
    setTasks([
      ...tasks,
      { id: Date.now(), title, description, completed: false },
    ])
  }

  function changeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const shownTasks = tasks.filter((task) => {
    if (filter === 'pending') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <main className="w-full max-w-180 mx-auto px-4 pt-28 pb-6 sm:pt-32 sm:pb-11">
      <Header />
      <Stats tasks={tasks} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={shownTasks}
        changeTask={changeTask}
        deleteTask={deleteTask}
      />
      <TaskForm addTask={addTask} />
    </main>
  )
}