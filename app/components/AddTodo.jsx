var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();

    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.props.onAddTodo(todoText);
      this.refs.todoText.value = ''
    }
    else {
      // if data not valid, cursor is placed back to the input
      this.refs.todoText.focus();
    }
  },
  render: function () {

    return (
      <div className='container__footer'>
        <form ref='form' onSubmit={this.onSubmit}>
          <input type='text' ref='todoText' placeholder='What do you need to do'/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
