import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const sendTask = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  //

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://http-request-react-a9e6f-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: { "Content-Type": "application/json" },
      },
      sendTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
