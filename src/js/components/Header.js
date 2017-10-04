import React from 'react';

const Header = (props) => (
    <header>
        <h1>React Lesson: 4 [ practice ]</h1>
        <h3>Урок четвертый</h3>
        <p className="description">
            Практика<br/>
            <b>Задания на сегодня:</b>
        </p>
        <ul className="tasks">
            <li>Создать компонент меню, с рабочими пунктами - "создать пост", инпут поиска  (3 балла)</li>
            {/*<li>Добавить возможность сортировать посты</li>*/}
            {/*<li>*/}
                {/*Исправить работу функции contentView написаной внутри компонента "Post" так,*/}
                {/*чтобы развернутым был только один компонент. [redux] (3 балла)*/}
            {/*</li>*/}
            {/*<li>*/}
                {/*Добавить стилизации на свое усмотрение, человек дизайн которого мне понравиться*/}
                {/*больше всего получит дополнительный балл.*/}
            {/*</li>*/}
            {/*<li>*/}
                {/*Добавить компоненту AddPost возможность добавлять `links` (3 балла)*/}
            {/*</li>*/}
        </ul>
    </header>
);

export default Header;