import React, { useState, } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToPaste, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState('');
    const[value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch=useDispatch();
    function createPaste(){
      const paste={
        title:title,
        value:value,
        _id:pasteId || 
          Date.now().toString(36),
          createdAt: new Date().toISOString(),
      }
      if(pasteId){
        //update
        dispatch(updateToPastes(paste)); 
      }
      else{
        //create
        dispatch( addToPaste(paste));
      }
      // after creation or updation 
      setTitle('');
      setValue('');
      setSearchParams({});
    }
  return (
    <div>
      <div className='flex flex-row-gap-7 place-content-between'>
        <input
            className='mt-2 p-1 rounded-2xl w-[66%] pl-4'
            type='text'
            placeholder='Enter title here'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <button className='mt-2 p-2 rounded-2xl' onClick={createPaste}>{
            pasteId ? "Update Paste" : "Create My Paste"
            }
            
        </button>
      </div>
      <div>
        <textarea
          className='rounded-2xl mt-4, min-w-[500px] p-6'
          value={value}
          placeholder="Enter content here"
          onChange={(e)=>setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default Home