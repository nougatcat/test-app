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
    const sortEmployeesByGroup = () => {
        const sortedEmployees = props.employees.toSorted((a, b) =>  a.group.localeCompare(b.group))
        return sortedEmployees
    }
    const sortEmployeesByID = () => {
        const sortedEmployees = props.employees.toSorted((a, b) =>  a.id.localeCompare(b.id))
        return sortedEmployees
    }
    const find = () => {
        let search = "John"
        let filteredEmployees = [...props.employees.filter(function (el) {
            for (let field in el) {
                if (el[field].indexOf(search) > -1) {
                    return true;//если нашли хотя бы одно поле содержащее искомую строку, оставляем объект
                }
            }
            return false;
        })]
        return filteredEmployees
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
                            <option value="group">Сортировка по группе</option>
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