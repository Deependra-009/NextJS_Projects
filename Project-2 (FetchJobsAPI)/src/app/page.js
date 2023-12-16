"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown } from "flowbite-react";

export default function Home() {

  const [jobList, setJobList] = useState([]);
  const [dropDownFilter,setDropDownFilter]=useState([]);
  const [filterData,setFilterData]=useState(null);

  useEffect(() => {
    fetchJobs();
  }, [])

  useEffect(()=>{
    if(dropDownFilter.length!=0){
      const filteredData=jobList.filter(item=>{
        return dropDownFilter.includes(item.department) || dropDownFilter.includes(item.location.workplace_type);
      })
      setFilterData(filteredData);
    }
    console.log(filterData);
  },[dropDownFilter])

  const fetchJobs = async () => {
    console.log("hello");
    await axios.get("https://deepu-trivedi.github.io/db.json")
      .then((response) => {
        console.log(response);
        setJobList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

  }

  const setFilterInJobs=(filterValue)=>{

    if(dropDownFilter.length>=0 && dropDownFilter.indexOf(filterValue)==-1){
      setDropDownFilter([...dropDownFilter,filterValue]);
      console.log(dropDownFilter);
      
    }
    

    
    
    

    
    
  }

  


  return (
    <main>
      <div className='w-[100%]'>
        <div className='w-[100%] flex justify-center items-center h-[100px] border-b-2 border-b-white'>
          <h1 className='text-[25px]'>Jobs List</h1>
        </div>
        <div className='w-[100%] flex justify-center items-center h-[100px] '>


          <Dropdown label="Department">
            <Dropdown.Item onClick={()=>setFilterInJobs('Legal')}>
              Legal
            </Dropdown.Item>
            <Dropdown.Item onClick={()=>setFilterInJobs('Technology')}>
              Technology
            </Dropdown.Item>
            <Dropdown.Item onClick={()=>setFilterInJobs('AI')}>
              AI
            </Dropdown.Item>
            <Dropdown.Item onClick={()=>setFilterInJobs('Operations')}>
              Operations
            </Dropdown.Item>
            <Dropdown.Item onClick={()=>setFilterInJobs('Sales')}>
              Sales
            </Dropdown.Item>
          </Dropdown>

          <Dropdown label="Work Model">
            <Dropdown.Item onClick={()=>setFilterInJobs('remote')}>
              Remote
            </Dropdown.Item>
            <Dropdown.Item onClick={()=>setFilterInJobs('hybrid')}>
              Hybrid
            </Dropdown.Item>
            <Dropdown.Item onClick={()=>setFilterInJobs('on_site')}>
              On Site
            </Dropdown.Item>
            
          </Dropdown>

          <button onClick={()=>{
            setFilterData(null)
            setDropDownFilter([])
          }} type="button" className="ml-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Reset</button>

        </div>
        <div className='w-[100%] p-10 flex flex-wrap '>

          {
            (filterData?filterData:jobList)
            .map((job) => (
              <div key={job.id} className="block w-[30%] m-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className='text-black font-bold'>{job.title}</div>
                <div className='text-black'>Country: <span>{job.location.country}</span></div>
                <div className='text-black'>{job.location.workplace_type}</div>
                <div className='text-black'>Department: <span>{job.department}</span></div>
                <div className='text-black'>Created at: <span>{job.created_at}</span></div>
              </div>
            ))
          }

        </div>
      </div>
    </main>
  )
}
