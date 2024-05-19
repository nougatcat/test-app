import { connect } from 'react-redux'
import { requestEmployees, setDesign, setEmployees } from '../../redux/employees-reducer'
import React, { useEffect } from 'react'
import EmployeesForm from './EmployeesForm'
import EmployeesCards from './EmployeesCards'
import EmployeesTable from './EmployeesTable'
import EmployeesGroups from './EmployeesGroups'
const Employees = (props) => {


    useEffect(() => {
        props.requestEmployees()
    }, [])
    useEffect(() => {
    }, [props.employees])
    useEffect(() => {
    }, [props.design])

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

        </div>
    )
}



let mapStateToProps = (state) => {
    return {
        employees: state.employeesPage.employees,
        design: state.employeesPage.design

    }
}


export default connect(mapStateToProps, { requestEmployees, setDesign })(Employees)