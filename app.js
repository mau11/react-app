//APP COMPONENT
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }
  clickHandler(one){
    //e.preventDefault();
    this.state.todos.push(one);
    console.log('TWO', this.state.todos);
    this.setState({
      todos: this.state.todos
    })
    console.log('CLICKED');
  }

  render(){
    return (
      <div>
        <h1>To Do List</h1>
        <Add onClick={this.clickHandler.bind(this)}/>
        <List todos={this.state.todos}/>
      </div>
    );
  }
}