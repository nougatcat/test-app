import css from './Employees.module.css'
import userPhoto from '../../images/user.webp'

const EmployeeCard = (props) => {
    return (
        <div className={css.card}>
            <div className={css.card__id}>{props.id}</div>
            <div className={css.card__name}>{props.fullname}</div>
            <div><img src={userPhoto} alt="" /></div>
            <div className={css.card__info}>{props.group}</div>
            <div className={css.card__info}>{props.email}</div>
        </div>
    )
}

const EmployeesCards = (props) => {
    return (
        <div className={css.cards}>
            {
                props.employees.map(emp => <EmployeeCard key={emp.id}
                    fullname={emp.fullname}
                    id={emp.id} email={emp.email} group={emp.group} />)
            }
        </div>
    )
}



export default EmployeesCards