import React from 'react'
import { MenuItem } from '@mui/material'
import Select from '@mui/material/Select';
/**
 * 
 * @param {object} props new amount and an function to update
 * @description changes the amount of an cart item, and updates state / reduc 
 * @returns new select with new value
 */
const SelectOptions = ({newAmount, updateAmount}) => {
    let selectAmount = 20;
    if(newAmount > selectAmount){
        selectAmount = newAmount;
    }
    //trick to create an array with a specific length..
  return (
            <Select id='amount' value={newAmount} className='productAmount' onChange={updateAmount}>
        {[...Array(selectAmount)].map((item,idx)=>{
            return <MenuItem key={idx} value={idx+1}>{idx+1}</MenuItem>
        })}
        </Select>
  )
}

export default SelectOptions