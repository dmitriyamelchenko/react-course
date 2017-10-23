import React from 'react';
import ReactDOM from 'react-dom';

// import MainLayout
import '../sass/common.scss';

// На текущий момент, этот компонент является основным корневым
// компонентом в который вложены остальные компоненты.
import MainLayout from "./containers/MainLayout";


// Метод render() -> взятый из отдельного модуля от React. ReactDOM является дополнительным пакетом входящим
// в экосистему React, которая отвечает за работу с DOM элементами, как виртуального DOM, так и настоящего ()
ReactDOM.render(<MainLayout />, document.getElementById('app'));

// Это корневой файл проекта, именно он будет указан в webpack как файл входа.
// Эго особенность заключается в том что в нем осуществляется первый и последний запрос
// к настоящему DOM и вставляется в него все наше приложение.