var ManyCounters = React.createClass({
    propTypes: {
        countersArray: React.PropTypes.array.isRequired,
    },

    render: function() {
        var counters = this.props.countersArray.map(function(counter) {
            return React.createElement(Counter, { key: counter.id, obj: counter });
        });
        return React.createElement('ul', { className: 'counters-list' }, counters);
    }
});