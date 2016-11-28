//ADD NEW ITEMS COMPONENT
const Add = (props) => (
   <form>
      <label>Add New Task:
        <input type="text" id="task"></input>
      </label>
        <button onClick={props.onClick}>Submit</button>
    </form>
);