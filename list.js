//LIST OF ITEMS COMPONENT
const List = (props) => (
  <div>
    <h4>Tasks to Complete:</h4>
    <div>
    {props.todos.push('testing', 'if', 'works')}
    {props.todos.map((oneItem, index) =>
      <Item items={oneItem} key={index}/>)}
    {console.log('ONE', props.todos)}
    </div>
  </div>
);