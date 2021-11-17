import { useState } from "react";

function TodoInput({ addTask }) {
  const [state, setState] = useState("");
  const hanldeInput = (e) => {
    setState(e.target.value);
  };
  const addItem = () => {
    addTask(state);
  };
  const styles = {
    backgroundColor: "white"
  };
  return (
    <div>
      <input
        placeholder="Write Something"
        type="text"
        value={state}
        onChange={hanldeInput}
      />
      <button style={styles} onClick={addItem}>
        +
      </button>
    </div>
  );
}
export default TodoInput;
