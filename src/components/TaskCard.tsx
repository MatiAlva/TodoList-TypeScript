import { Task } from '../interfaces/Taks'

interface Props {
    task: Task,
    deleteATask: (id:number) => void
}

export const TaskCard = ({task, deleteATask}: Props) => {
  return (
    <>
        <div 
            key={task.id} 
            className='card card-body bg-secondary rounded-0 text-dark'
        >
            <h2>{task.title}</h2>
            <p>{task.id}</p>
            <p>{task.description}</p>
            <button className='btn btn-danger' onClick={() => task.id && deleteATask(task.id)}>
                Delete
            </button>
        </div>
    </>
  )
}
