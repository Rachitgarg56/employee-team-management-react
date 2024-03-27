import React from 'react'
import './Right.css';

const Right = ({TeamData, avgAge, dispatch}) => {
  
  return (
    <div className='right'>
      <h2>TEAM</h2>
      <button className='sort' onClick={()=>dispatch({type:'SORT'})}>SORT BY AGE</button>

      <ul className='team'>
          
          {
              TeamData.map((employee)=>{
                  return (
                    <li className='team-member-row' key={employee.id}>
                      <div className='team-member-name'>{employee.first_name}</div>
                      <div className='team-member-age'>{employee.age}</div>
                      <button className='remove' onClick={()=>dispatch({type:'REMOVE',id:employee.id})}>REMOVE</button>
                    </li>
                  )
              })
          }

      </ul>
      
      <div className='average-age'>
        <div>Average Age</div>
        <span>{10}</span>
      </div>

    </div>
  )
}

export default Right
