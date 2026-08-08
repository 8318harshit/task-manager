export default function Stats({ tasks }) {
  const completed = tasks.filter((task) => task.completed).length

  return (
    <div className="flex flex-wrap gap-4 sm:gap-5 my-5 text-black">
      <span>Total: {tasks.length}</span>
      <span>Completed: {completed}</span>
      <span>Pending: {tasks.length - completed}</span>
    </div>
  )
}