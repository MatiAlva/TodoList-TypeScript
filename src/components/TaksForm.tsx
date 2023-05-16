import {AiOutlinePlus} from 'react-icons/ai'
import {useState, ChangeEvent, FormEvent, useRef} from 'react'
import { Task } from '../interfaces/Taks'


type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface Props {
  addANewTask: (task: Task) => void
}


const INITIAL_STATE = {
  title: '',
  description: ''
}

export default function TaksForm ({addANewTask}: Props)  {

  const inputTitle = useRef<HTMLInputElement>(null)
  const [task, seTask] = useState(INITIAL_STATE)

  const handleInputChange = ({target: {name, value}}: HandleInputChange) => {
    seTask({...task, [name]: value})
  }



  const hadleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addANewTask(task)
    seTask(INITIAL_STATE)
    inputTitle.current?.focus()
  }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Taks</h1>

      <form onSubmit={hadleNewTask}>
        <input 
          type="text" 
          placeholder="Write a Title" 
          name="title" 
          className="from-control mb-3 rounded-0 shadow-none border-0" 
          onChange={handleInputChange}
          value={task.title}
          autoFocus
          ref={inputTitle}
        />

        <textarea 
          name="description" 
          rows={2}          
          placeholder="Write a Description"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        />

        <button 
          className="btn btn-primary"
        >
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>

  )
}
