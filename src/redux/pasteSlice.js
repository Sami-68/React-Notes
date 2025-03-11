import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")
? JSON.parse(localStorage.getItem("pastes")):[] 
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {

    addToPaste: (state,action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", state.pastes);
      toast("Paste Created Successfully")
    },
    updateToPastes: (state,action) => {
      
    },
    resetAllPastes: (state,action) => {
      
    },
    removeFromPastes: (state,action) => {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPastes,  resetAllPastes, removeFromPastes} = pasteSlice.actions

export default pasteSlice.reducer