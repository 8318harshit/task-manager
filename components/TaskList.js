import TaskCard from './TaskCard'

export default function TaskList({ tasks, changeTask, deleteTask }) {
  return (
    <section className="grid gap-3 sm:gap-4">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            changeTask={changeTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p className="text-black">No tasks here.</p>
      )}
    </section>
  )
}