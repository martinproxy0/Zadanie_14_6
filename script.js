var items = [{
        id: 1,
        name: 'Licznik jabłek',
        inc: 1
    },
    {
        id: 2,
        name: 'Licznik gruszek',
        inc: 3
    },
    {
        id: 3,
        name: 'Licznik śliwek',
        inc: 100
    }
];

var element = React.createElement(ManyCounters, { countersArray: items });
ReactDOM.render(element, document.getElementById('app'));