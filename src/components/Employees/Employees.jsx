import React from 'react'
import EmployeesForm from './EmployeesForm'
import EmployeesCards from './EmployeesDesign/EmployeesCards'
import EmployeesTable from './EmployeesDesign/EmployeesTable'
import EmployeesGroups from './EmployeesDesign/EmployeesGroups'

const Employees = (props) => {

    return (
        <div>
            <EmployeesForm employees={props.employees} 
                requestEmployees={props.requestEmployees}
                setDesign={props.setDesign}/>

            {props.design === 'cards'
            ? <EmployeesCards employees={props.employees} />
            : props.design === 'groups'
            ? <EmployeesGroups employees={props.employees} />
            : <EmployeesTable employees={props.employees}  />}

            {props.employees.length === 0 && <div>
                Ничего не найдено</div>}


        </div>
    )
}

export default Employees