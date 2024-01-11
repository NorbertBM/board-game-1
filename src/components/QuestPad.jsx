import React from "react";
import "../css/Quest-pad.css";
export default function QuestPad({
  quest_title = "Quest title",
  quest_description = "Quest description",
  quest_id,
  quest_status = "incomplete",
  quest_tasks = [
    {
      task_title: "task 1",
      task_description: "task 1 description",
      task_status: "incomplete",
    },
    {
      task_title: "task 2",
      task_description: "task 2 description",
      task_status: "incomplete",
    },
    {
      task_title: "task 3",
      task_description: "task 3 description",
      task_status: "incomplete",
    },
  ],
}) {
  return (
    <div className="quest-pad">
      <header>
        <h2 className="quest_title">{quest_title}</h2>
        <small className="quest_status">{quest_status}</small>
        <p className="quest_description">{quest_description}</p>
      </header>
      <ul className="quest_tasks">
        {quest_tasks.map((task) => (
          <li className="quest_task">
            <aside>
              <h4 className="task_title">{task.task_title}</h4>
              <p className="task_description">{task.task_description}</p>
            </aside>
            <div className="task_status"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
