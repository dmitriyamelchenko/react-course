# react-course


### Сложный компонент:
Это всегда класс, который наследуется от класса Component находящегося в библотеке реакт. Который дает определенные возможности нашему классу компонента. 

Сложный компонент обязательно должен иметь в себе метод render, который обязательно должен возвращать jsx

У сложного компонента есть жизненный цикл, состояние и ряд других преймуществ в сравнении с простым компонентом. 
```jsx
import React from 'react';

// тут мы указали что запрашиваем файл SimpleComponent,
// а точнее то, что он експортирует по умолчанию
import SimpleComponent from './simple-component';

// Это сложный компонент, другими словами еще называют умным, поскольку он
// наследуется от специального класса который дает умному компоненту возможность
// таковым быть. Подразумеваеться наследование логики жизненного цикла
// компонентов о которой мы поговорим позже, специального метода render()
// который является обязательным, а так же логику таких сущностей как
// свойства и состояния (props & state)

// О том какой функционал появляется у нашего класса при наследовании
// от React.Component вы можете узнать просто посмотревь в консоли объект this
export default class ComplexComponent extends React.Component {

    // state - специальный объект компонента который содержит в себе свойства класса
    // которые могут быть изменены.
    // Изменения обязательно необходимо осуществлять по средствам функции setState() которая наследуется
    // от React.Component
    state = {
      selectedIndex: 0
    };

    // Пользовательская функция, которая получая определенный параметр - меняет state,
    // Изменение state с помощью функции setState влечет за собой перерисовку всего компонента
    // в котором изменился state
    handleOnClick(index){
        this.setState({ selectedIndex: index });
    };

    // Это основной обязательный метод, в котором обязательно должен быть
    // возвращен JSX.
    render() {
        return (
            <div>
                <h1>Complex component</h1>
                <a href="#" onClick={() => this.handleOnClick(0)}>First</a> <br/>
                <a href="#" onClick={() => this.handleOnClick(1)}>Second</a>


                {/*Это два простых компонента, коментарии и сам компонент
                 находятся в файле simple-component.js */}
                <SimpleComponent index={0} selectedIndex={this.state.selectedIndex}/>
                {/* index={0} => так мы передаем свойства в компонент,
                 они приходят в первый параметр компонента, в виде
                 свойства объекта, где название (в нашем случае - index и selectedIndex) будет ключем, а то
                 что мы указываем внутри скобок - значением */}

                <SimpleComponent index={1} selectedIndex={this.state.selectedIndex}/>
            </div>
        )
    }
}
```

---

### Простой компонент:
Простой компонент это функция, которая возвращает jsx, на вход первым аргументом приходит объект передаваемых в этот компонент `props` (надстроек, данных, свойств, называйте как хотите, мне удобно говорить или props или свойств).
```jsx
import React from 'react';

const SimpleComponent = props => {
    // Это простой компонент, простой он потому что он не является классом, а
    // следовательно не наследуется от специального класса Component.

    // В простом компоненте нет состояний, он лишь отдает jsx, можно статический,
    // а можно с использованием динамически подставляемых данных которые приходят
    // в первый параметр этой функции, который мы, по общему
    // соглашению именуем "props".
    return (
        props.selectedIndex === props.index ? <p>SimpleComponent with index: {props.index}!</p> : false
    )
};

export default SimpleComponent;
```