import { Field, Form, Formik } from 'formik';

const usersSearchFormValidate = (values) => {
    const errors = {};
    return errors;
}

const EmployeeSearchForm = (props) => {

    const sortEmployeesByFullName = () => {
        const sortedEmployees = props.employees.toSorted((a, b) =>  a.fullname.localeCompare(b.fullname))
        return sortedEmployees
    }
    const sortEmployeesByPosition = () => {
        const sortedEmployees = props.employees.toSorted((a, b) =>  a.position.localeCompare(b.position))
        return sortedEmployees
    }
    const sortEmployeesByID = () => {
        const sortedEmployees = props.employees.toSorted((a, b) =>  a.id.localeCompare(b.id))
        return sortedEmployees
    }

    const submit = (values, { setSubmitting }) => {
        const filter = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === "true" ? true : false
        }

        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                initialValues={{ term: '', filter: null }}
                validate={usersSearchFormValidate}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field name='sort' as='select'>
                            <option value="id">Сортировка по ID</option>
                            <option value="fullname">Сортировка по имени</option>
                            <option value="position">Сортировка по группе</option>
                        </Field>
                        <Field type="text" name="search" />
                        <button type="submit" disabled={isSubmitting}>
                            Найти
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default EmployeeSearchForm