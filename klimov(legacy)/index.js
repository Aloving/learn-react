var StudentItem = React.createClass({
  render: function() {
    // onClick={this.handleClick.bind(this, student)}
    return (
      <li>
        {this.props.student.name} {this.props.student.surname}{' '}
        <span onClick={this.props.onDeleteItem}>
          {' '}X{' '}
        </span>
      </li>
    );
  },
});

var App = React.createClass({
  getInitialState: function() {
    return { list: this.props.students };
  },

  handleClick: function(student) {
    var newList = [].concat(this.state.list);
    newList.splice(this.state.list.indexOf(student), 1);
    this.setState({ list: newList });
  },

  render: function() {
    return (
      <div>
        <h1> Students List </h1>
        <ul>
          {this.state.list.map(function(item, i) {
            return (
              <StudentItem
                student={item}
                key={i}
                onDeleteItem={this.handleClick.bind(this, item)}
              />
            );
          }, this)}
        </ul>
      </div>
    );
  },
});
