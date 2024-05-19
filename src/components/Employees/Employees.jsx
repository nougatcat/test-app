import css from './Employees.module.css'
import { connect } from 'react-redux'
import { requestEmployees } from '../../redux/employees-reducer'
import React, { useEffect } from 'react'
import Employee from './Employee'
import EmployeeSearchForm from './EmployeeSearchForm'

const Employees = React.memo(props => {


    useEffect(()=>{
        props.requestEmployees()
    },[])

    // const sortEmployeesByFullName = () => {
    //     const sortedEmployees = props.employees.toSorted((a, b) =>  a.fullname.localeCompare(b.fullname))
    //     return sortedEmployees
    // }
    // const sortEmployeesByPosition = () => {
    //     const sortedEmployees = props.employees.toSorted((a, b) =>  a.position.localeCompare(b.position))
    //     return sortedEmployees
    // }
    // const sortEmployeesByID = () => {
    //     const sortedEmployees = props.employees.toSorted((a, b) =>  a.id.localeCompare(b.id))
    //     return sortedEmployees
    // }

    

    return (
        <div>
            <EmployeeSearchForm />
            <div className={css.head}>
                <div className={css.row__id}>ID</div>
                <div className={css.row__column}>Имя</div>
                <div className={css.row__column}>Почта</div>
                <div className={css.row__position}>Группа</div>
            </div>
            {
                props.employees.map(emp => <Employee key={emp.id}
                    id={emp.id} fullname={emp.fullname}
                    email={emp.email} position={emp.position}/>)
            }
            {/* {
                sortEmployeesByFullName().map(emp => <Employee key={emp.id}
                    id={emp.id} fullname={emp.fullname}
                    email={emp.email} position={emp.position}/>)
            } */}




        </div>        
    )
})



let mapStateToProps = (state) => {
    return {
        employees: state.employeesPage.employees
    }
}


export default connect(mapStateToProps, {requestEmployees})(Employees)