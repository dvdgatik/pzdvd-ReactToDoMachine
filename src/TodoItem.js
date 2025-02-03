import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
import './TodoItem.css'
function TodoItem({id, text, completed, onComplete, onDelete}) {

    return (
      <li key={id} className="TodoItem">
        {/* <span onClick={onComplete} className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
          V {completed}
        </span> */}
        <CompleteIcon completed={completed} onComplete={onComplete}/>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
          {text}
        </p>
        {/* <span onClick={onDelete} className={`Icon ${completed && "Icon-delete"}`}>X</span> */}
        <DeleteIcon onDelete={onDelete}/>
      </li>
    );
}

export { TodoItem };