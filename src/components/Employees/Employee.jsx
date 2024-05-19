import css from './Employees.module.css'

const Employee = (props) => {
    return (
        <div className={css.row}>
            <div className={css.row__id}>{props.id}</div>
            <div className={css.row__column}>{props.fullname}</div>
            <div className={css.row__column}>{props.email}</div>
            <div className={css.row__group}>{props.group}</div>
        </div>
    )
}

export default Employee