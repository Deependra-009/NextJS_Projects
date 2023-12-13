import { deleteTodo } from '@/todo/todoSlice';
import { useSelector,useDispatch } from 'react-redux'
export default function DisplayUsers() {

    const todos = useSelector((data) => data.todos);

    const dispatch=useDispatch();
    return (
        <div className='w-[100%] flex flex-wrap'>
            {
                todos.map((item) => (
                    <div key={item.id} className=" mr-5 mt-5 block w-[30%] p-6  border border-gray-200 rounded-lg shadow  ">

                        <p className="font-normal text-black dark:text-gray-400">{item.text}</p>
                        <div className='flex justify-end'>
                            <img className='hover:cursor-pointer' src='pencil.svg' />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <img onClick={()=>{dispatch(deleteTodo(item.id))}} className='hover:cursor-pointer' src='trash.svg' />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}