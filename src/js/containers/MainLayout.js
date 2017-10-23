import React from 'react';
import Menu from "../components/Menu";

export default class MainLayout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <h1>[ Playground ]</h1>
                <Menu/>

                <p>Начало: сейчас мы сделаем самый простой компонент меню, который можно будет скрыть и отобразить.</p>
            </div>
        );
    }
}