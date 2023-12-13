'use client'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '@/todo/todoSlice';
import DisplayUsers from './components/display';

export default function Home() {

  

  const dispatch = useDispatch();

  const [todo, settodo] = useState('');

  async function setTodo(e) {
    e.preventDefault()
    dispatch(addTodo(todo))
    settodo('')
  }

  return (
    <main>
      <div className=' w-[100%] justify-center flex h-[100vh] '>
        <div className='w-[50%]  bg-opacity-10 backdrop-filter backdrop-blur-sm h-[100vh] '>
          <div className='w-[100%] flex justify-center '>
            <h1 className='text-[30px] p-5 text-blue-500'>Todo List</h1>
          </div>
          <div className='w-[100%] '>
            <form onSubmit={setTodo} className="w-[100%]  mt-10">
              <textarea value={todo} onChange={(e) => settodo(e.target.value)} id="message" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
              <div className='w-[100%] p-3 flex justify-center'>
                <button type="submit" className=" w-[30%] text-[20px] text-blue-500 font-semibold border-2   border-blue-500 rounded-[15px] py-2">ADD</button>
              </div>
            </form>
          </div>
          
          <DisplayUsers/>
        </div>
      </div>
    </main>
  )
}
