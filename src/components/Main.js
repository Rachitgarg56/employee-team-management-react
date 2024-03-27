import React, { useReducer } from 'react'
import Left from './Left'
import Right from './Right'
import './Main.css';
import Employees from '.././Employees.js';

const Main = () => {
  
  const reducer = (state,action) => {
    switch (action.type) {
      case 'ADD': {
        const newArr = [...state.EmployeesData];
        let member;
        for (let i = 0; i < newArr.length; i++) {
          if (newArr[i].id === action.id) {
            newArr[i].isEnabled = true;
            member = newArr[i];
            break;
          }
        }
        return {
          ...state,
          EmployeesData: newArr,
          TeamData: [...state.TeamData,member]
        }
      }
      case 'REMOVE': {
        const newArr = [...state.TeamData];
        let employeeToAdd;
        for (let i = 0; i < newArr.length; i++) {
          if (newArr[i].id === action.id) {
            employeeToAdd = newArr.splice(i,1);
            break;
          }
        }
        const EmployeesDataNew = [...state.EmployeesData].map((employee) => {
          if (employee.id === employeeToAdd[0].id) {
            delete employee.isEnabled;
          }
          return employee;
        })
        return {
          ...state,
          TeamData: newArr,
          EmployeesData: EmployeesDataNew
        }
      }
      case 'SORT': {
        return {
          ...state,
          TeamData: [...state.TeamData].sort((a,b)=>a.age-b.age)
        }
      }
      default: {
        return state;
      }
    }
  }

  const [state,dispatch] = useReducer(reducer,{EmployeesData: Employees, TeamData: []});

  // function getAvgAge () {
  //   let avgAge = 0; 
  //   for (let i = 0; i < state.TeamData.length; i++) {
  //     avgAge += state.TeamData[i].age;
  //   }
  //   avgAge = avgAge/state.TeamData.length;
  //   return avgAge;
  // }

  return (
    <div className='main'>
      <Left EmployeesData={state.EmployeesData} avgAge={state.avgAge} dispatch={dispatch}/>
      <Right TeamData={state.TeamData} dispatch={dispatch}/>
    </div>
  )
}

export default Main
