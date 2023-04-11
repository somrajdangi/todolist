function ToDoList(props) {
  return (
    <div className="listitems">
      <li id={props.index}>
        <input className="checkbox" type="checkbox" />
        {props.item.title}
        <button
          className="delete"
          id={props.index}
          onClick={props.handleDelete}
        >
          delete
        </button>
      </li>
    </div>
  );
}
export default ToDoList;
