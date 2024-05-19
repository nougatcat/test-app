import css from './Employees.module.css'
import { connect } from 'react-redux'
import { requestEmployees } from '../../redux/employees-reducer'
import React, { useEffect } from 'react'
import Employee from './Employee'
import EmployeeSearchForm from './EmployeeSearchForm'

const Employees = (props) => {


    useEffect(()=>{
        props.requestEmployees()
    },[])

    // const sortEmployeesByFullName = () => {
    //     const sortedEmployees = props.employees.toSorted((a, b) =>  a.fullname.localeCompare(b.fullname))
    //     return sortedEmployees
    // }
    // const sortEmployeesByGroup = () => {
    //     const sortedEmployees = props.employees.toSorted((a, b) =>  a.group.localeCompare(b.group))
    //     return sortedEmployees
    // }
    // const sortEmployeesByID = () => {
    //     const sortedEmployees = props.employees.toSorted((a, b) =>  a.id.localeCompare(b.id))
    //     return sortedEmployees
    // }

    // const find = (search = 'man') => {
    //     let filteredEmployees = [...props.employees.filter(function (el) {
    //         for (let field in el) {
    //             if (el[field].indexOf(search) > -1) {
    //                 return true;//если нашли хотя бы одно поле содержащее искомую строку, оставляем объект
    //             }
    //         }
    //         return false;
    //     })]
    //     return filteredEmployees
    // }
    

    return (
        <div>
            <EmployeeSearchForm />
            <div className={css.head}>
                <div className={css.row__id}>ID</div>
                <div className={css.row__column}>Полное имя</div>
                <div className={css.row__column}>Электронная почта</div>
                <div className={css.row__group}>Группа</div>
            </div>
            {
                props.employees.map(emp => <Employee key={emp.id}
                    id={emp.id} fullname={emp.fullname}
                    email={emp.email} group={emp.group}/>)
            }
            {/* {
                find('Vriska').map(emp => <Employee key={emp.id}
                    id={emp.id} fullname={emp.fullname}
                    email={emp.email} group={emp.group}/>)
            } */}
            {/* {
                sortEmployeesByFullName().map(emp => <Employee key={emp.id}
                    id={emp.id} fullname={emp.fullname}
                    email={emp.email} group={emp.group}/>)
            } */}




        </div>        
    )
}



let mapStateToProps = (state) => {
    return {
        employees: state.employeesPage.employees
    }
}


export default connect(mapStateToProps, {requestEmployees})(Employees)