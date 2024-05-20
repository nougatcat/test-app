import css from '../Employees.module.css'

const EmployeeRow = (props) => {
    return (
        <div className={css.row}>
            <div className={css.row__id}>{props.id}</div>
            <div className={css.row__fullname}>{props.fullname}</div>
            <div className={css.row__email}>{props.email}</div>
            <div className={css.row__group}>{props.group}</div>
        </div>
    )
}

const EmployeesTable = (props) => {
    return (
        <div>
            <div className={css.head}>
                <div className={css.row__id}>ID</div>
                <div className={css.row__fullname}>Полное имя</div>
                <div className={css.row__email}>Электронная почта</div>
                <div className={css.row__group}>Группа</div>
            </div>
            {
                props.employees.map(emp => <EmployeeRow key={emp.id}
                    id={emp.id} fullname={emp.fullname}
                    email={emp.email} group={emp.group} />)
            }
        </div>
    )
}

export default EmployeesTable