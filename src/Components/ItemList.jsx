import React from "react";
import Item from "./Item";

const ItemList = ({ tasks, onDeleteTask, onDoneTask, onEditTask }) => {
  return (
    <div className="item-list-container">
      {tasks.length > 0 ? (
        tasks.map((task, index) => {
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
        })
      ) : (
        <h2 data-testid="no-data">No Data Found</h2>
      )}
    </div>
  );
};

export default ItemList;
