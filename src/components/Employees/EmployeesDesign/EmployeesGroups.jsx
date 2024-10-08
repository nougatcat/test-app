import css from '../Employees.module.css'

const EmployeeGroup = (props) => {
    return (
        <div className={css.group__person}>
            <div><strong>{props.fullname}</strong></div>
            <div className={css.group__person_email}>{props.email}</div>
            <div className={css.group__person_id}>{props.id}</div>
        </div>
    )
}

const EmployeesGroups = (props) => {
    const groupSplit = (search = 'Managers') => {
        let splittedByGroup = props.employees.filter(function (el) {
            return el.group.indexOf(search) > -1
        });
        return splittedByGroup
    }
    const managersGroup = groupSplit('Managers')
    const accountantsGroup = groupSplit('Accountants')
    const hrGroup = groupSplit('HR')
    const qaGroup = groupSplit('QA')
    const unmanagedGroup = groupSplit('Unmanaged')

    return (
        <div className={css.groups}>
            {managersGroup.length !== 0 && <div className={css.group}>
                <div className={css.group__title}>Managers</div>
                {
                    managersGroup.map(emp => <EmployeeGroup key={emp.id}
                        fullname={emp.fullname}
                        email={emp.email}
                        id={emp.id} />)
                }
            </div>}
            {accountantsGroup.length !== 0 && <div className={css.group}>
                <div className={css.group__title}>Accountants</div>
                {
                    accountantsGroup.map(emp => <EmployeeGroup key={emp.id}
                        fullname={emp.fullname}
                        email={emp.email}
                        id={emp.id} />)
                }
            </div>}
            {hrGroup.length !== 0 && <div className={css.group}>
                <div className={css.group__title}>HR</div>
                {
                    hrGroup.map(emp => <EmployeeGroup key={emp.id}
                        fullname={emp.fullname}
                        email={emp.email}
                        id={emp.id} />)
                }
            </div>}
            {qaGroup.length !== 0 && <div className={css.group}>
                <div className={css.group__title}>QA</div>
                {
                    qaGroup.map(emp => <EmployeeGroup key={emp.id}
                        fullname={emp.fullname}
                        email={emp.email}
                        id={emp.id} />)
                }
            </div>}
            {unmanagedGroup.length !== 0 && <div className={css.group}>
                <div className={css.group__title}>Unmanaged</div>
                {
                    unmanagedGroup.map(emp => <EmployeeGroup key={emp.id}
                        fullname={emp.fullname}
                        email={emp.email}
                        id={emp.id} />)
                }
            </div>}
            
        </div>
    )
}



export default EmployeesGroups