import { Field, Form, Formik } from 'formik';
import css from './Employees.module.css'

const usersSearchFormValidate = (values) => {
    const errors = {};
    return errors;
}


const EmployeesForm = (props) => {

    const submitSearch = (values) => {
        props.requestEmployees(values.term,values.sort)
    }
    const submitDesign = (values) => {
        props.setDesign(values.design)
    }

    return (
        <div className={css.forms}>
            <Formik
                initialValues={{ design: 'table' }}
                onSubmit={submitDesign}
            >
                {() => (
                    <Form>
                        <Field name='design' as='select'>
                            <option value="table">Таблица</option>
                            <option value="cards">Карточки</option>
                            <option value="groups">Группы</option>
                        </Field>
                        <button type="submit">
                            Изменить
                        </button>
                    </Form>
                )}
            </Formik>

            <Formik
                initialValues={{ term: '', sort: ''}}
                onSubmit={submitSearch}
            >
                {() => (
                    <Form>
                        <Field name='sort' as='select'>
                            <option value="id">Сортировка по ID</option>
                            <option value="fullname">Сортировка по имени</option>
                        </Field>
                        <Field type="text" name="term" />
                        <button type="submit">
                            Найти
                        </button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default EmployeesForm