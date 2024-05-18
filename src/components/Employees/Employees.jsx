import css from './Employees.module.css'
import { connect } from 'react-redux'
import { requestEmployees } from '../../redux/employees-reducer'
import React, { useEffect } from 'react'

const Employees = React.memo(props => {


    useEffect(()=>{
        props.requestEmployees()
    },[])

    return (
        <div>
            <div className={css.head}>
                <div>ID</div>
                <div>Имя</div>
                <div>Почта</div>
                <div>Группа</div>
            </div>
            {
                props.employees.map(emp => <Employee key={emp.id}
                    id={emp.id} fullname={emp.fullname}
                    email={emp.email} position={emp.position}/>)
            }




        </div>        
    )
})

const Employee = (props) => {
    return (
        <div className={css.row}>
            <div>{props.id}</div>
            <div>{props.fullname}</div>
            <div>{props.email}</div>
            <div>{props.position}</div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        employees: state.employeesPage.employees
    }
}


export default connect(mapStateToProps, {requestEmployees})(Employees)