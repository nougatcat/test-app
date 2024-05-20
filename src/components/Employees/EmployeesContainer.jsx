import { connect } from 'react-redux'
import { requestEmployees, setDesign } from '../../redux/employees-reducer'
import React, { useEffect } from 'react'
import Employees from './Employees'

const EmployeesContainer = (props) => {

    useEffect(() => {
        props.requestEmployees()
    }, [])
    useEffect(() => {
    }, [props.employees])
    useEffect(() => {
    }, [props.design])

    return (
        <Employees employees={props.employees} design={props.design}
            requestEmployees={props.requestEmployees} setDesign={props.setDesign}/>
    )
}

let mapStateToProps = (state) => {
    return {
        employees: state.employeesPage.employees,
        design: state.employeesPage.design
    }
}

export default connect(mapStateToProps, { requestEmployees, setDesign })(EmployeesContainer)