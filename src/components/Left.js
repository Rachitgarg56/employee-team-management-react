import React from 'react'
import './Left.css';

const Left = ({EmployeesData,dispatch}) => {

  return (
    <div className='left'>

        <h2>Employees</h2>

        <ul className='employees'>
            
            {
                EmployeesData.map((employee)=>{ 
                    return (
                      <li className='employee-row' key={employee.id}>
                        <div className='employee-name' style={employee.hasOwnProperty('isEnabled') ? {color:"gray"} : {color:"black"}}>{employee.first_name}</div>
                        <div className='employee-age' style={employee.hasOwnProperty('isEnabled') ? {color:"gray"} : {color:"black"}}>{employee.age}</div>
                        {employee.hasOwnProperty('isEnabled') ? <div style={{width:"25%"}}></div> : <button className='add' onClick={()=>dispatch({type: 'ADD',id: employee.id})}>ADD</button>}
                      </li>
                    )
                })
            }
      
        </ul>

    </div>
  )

}

export default Left
