import React from "react";
import Item from "./Item";

const ItemList = ({ tasks, onDeleteTask, onDoneTask, onEditTask }) => {
  return (
    <div className="item-list-container">
      {tasks.map((task, index) => {
        return (
          <div
            data-testid="task"
            className="w-100 d-flex justify-content-center"
          >
            <Item
              key={index}
              task={task}
              onDeleteTask={onDeleteTask}
              onDoneTask={onDoneTask}
              onEditTask={onEditTask}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
