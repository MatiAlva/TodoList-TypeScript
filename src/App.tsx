import { useState } from 'react'
import logo from './assets/react.svg'
import { Task } from './interfaces/Taks'
import { TaskList } from './components/TaskList'
import  TaksForm  from './components/TaksForm'


interface Props {
  title?: string,
}

export function App({title}:Props) {
  const [tasks, setTask] = useState<Task[]>([
    {
      id: 1,
      title: 'TypeScript',
      description: 'Learn React Witch TypeScript',
      completed: false
    }
  ])

  const getCurrentTimeTemp = ():number => new Date().getTime()


  const addANewTask = (task: Task) => setTask(
    [...tasks, 
    {...task, id:getCurrentTimeTemp(), completed: false}
  ])

  const deleteATaks = (id:number) => setTask(tasks.filter(task => task.id !== id))


  return (
      <div className='bg-dark text-white' style={{height: '100vh'}}>
        <nav className='navbar navbar-dark bg-primary'>
          <div className='container'>
            <a href='/' className='navbar-brand'>
              <img src={logo} alt='React Logo' style={{width: '4rem'}}/>
              {title && <h1>{title}</h1>}
            </a>
          </div>
        </nav>

        <main className='container p-4'>
          <div className="row">
            <div className="col-md-4">
                <TaksForm addANewTask={addANewTask}/>
            </div>
                <div className="col-md-8">
                  <div className="row">
                    <TaskList tasks={tasks} deleteATask={deleteATaks}/>
                  </div>
                </div>
          </div>
        </main>
      </div>
  )
}
