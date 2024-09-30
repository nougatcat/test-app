import css from './About.module.css'
import folderPic from '../../images/about/folderPic.svg'
import reactTreePic from '../../images/about/reactTreePic.svg'
import stateTreePic from '../../images/about/stateTreePic.jpg'


const About = (props) => {

    return (
        <div className={css.wrapper}>
            <h1>Что делает это приложение?</h1>
            <div>
                <div className={css.code}>
                    <p>&#123;</p>
                    <p className={css.code__tab}>"id": 1,</p>
                    <p className={css.code__tab}>"fullname": "John Smith",</p>
                    <p className={css.code__tab}>"group": "Managers",</p>
                    <p className={css.code__tab}>"email": "john.smith@example.com"</p>
                    <p>&#125;</p>
                    <p className={css.code__description}>Так выглядят данные сотрудника</p>
                </div>
                <div>
                    <p>Приложение имеет 2 роута: «Сотрудники» - страница, где выводится список пользователей и «Приветствие» - страница приветствия, которую вы сейчас просматриваете.</p>
                    <p>Приложение с помощью axios загружает c моего удаленного репозитория json (300 записей ) со списком пользователей, а для случая, если сервер недоступен, я прописал catch, который загрузит локальную копию файла.</p>
                    <p>Группы: Managers, Accountants, HR, QA, Ungrouped</p>
                    <p>Я сделал три варианта отображения. Каждый вариант содержит четыре параметра. По умолчанию отрисовывается вариант «Таблица». Выбор осуществляется через взаимодействие с формой.</p>
                    <p>Есть возможность сортировки по ID и сортировки по имени пользователя, и поиск по всем столбцам.</p>
                </div>
            </div>
            <h1>Как сделано это приложение?</h1>
            <div>
                <div>
                    <p>Приложение написано на React. Для управления состоянием используется Redux. Для запросов на сервер – Axios. Для работы с формами – Formik.</p>
                    <p>Я разделил файлы приложения так, что есть отдельно UI (<img src={folderPic} alt="folder" className={css.folder} /> components), BLL (<img src={folderPic} alt="folder" className={css.folder} /> redux) и DAL (<img src={folderPic} alt="folder" className={css.folder} /> api). Функции для поиска и сортировки лежат в <img src={folderPic} alt="folder" className={css.folder} /> utilities.</p>
                    <p>В стейте хранится массив полученных данных сотрудников (employees) и выбранный способ отображения (design). Работа с этими данными реализована через редюсер и Redux</p>
                </div>
            </div>
            <div className={css.pics}>
                <img src={reactTreePic} alt="react tree" />
                <p>Компоненты приложения</p>
                <img src={stateTreePic} alt="" />
                <p>Дерево состояний</p>
            </div>
        </div>
    )
}

export default About