var Counter = React.createClass({
    propTypes: {
        obj: React.PropTypes.object.isRequired,
    },

    componentDidMount() {
        console.log('W dokumentacji jest przykład z zegarkiem, gdzie po utworzeniu i załadowaniu');
        console.log('komponentu, w tym miejscu możemy uruchamiać funkcje setInterval()');
    },

    componentWillUnmount() {
        console.log('kiedy timer przestaje być potrzebny na stronie, tu możemy zrobić clearInterval żeby wyłaczyć licznik');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + this.props.obj.inc
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - this.props.obj.inc
        });
    },

    render: function() {
        return React.createElement('li', {},
            React.createElement('span', {}, 'Licznik o nazwie \"' + this.props.obj.name +
                '\" i ID = ' + this.props.obj.id + ' skok co ' + this.props.obj.inc + ' ma wartość ' + this.state.counter),
            React.createElement('br'),
            React.createElement('button', { onClick: this.increment, type: 'button' }, 'Change in plus'),
            React.createElement('button', { onClick: this.decrement, type: 'button' }, 'Change in minus')
        );
    }
});