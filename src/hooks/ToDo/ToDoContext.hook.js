import React, {Component} from "react";

const ToDoContext = React.createContext([]);

export class ToDoProvider extends Component {
  state = {
    toDoList: []
  };
  
  setToDoList = (toDoItem) => {
    this.setState(prevState => ({ ...prevState, toDoList: [...prevState.toDoList, toDoItem] }));
  };
  
  render() {
    const {toDoList} = this.state;

    return (
      <ToDoContext.Provider value={{toDoList, setToDoList: this.setToDoList}}>
        {this.props.children}
      </ToDoContext.Provider>
    );
  }
}
export const ToDoConsumer = ToDoContext.Consumer;

export default ToDoContext;
