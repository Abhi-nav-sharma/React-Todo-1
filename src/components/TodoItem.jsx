const TodoItem = ({ id, title, status, handleToggle, handleDelete }) => {
  const styles = {
    margin: "10px auto",
    width: "300px",
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "10px"
  };
  return (
    <>
      <div style={styles}>
        <span>
          {title} - {status ? "Done" : "Not Done"}{" "}
        </span>
        <button onClick={() => handleToggle(id)}>T</button>
        <button onClick={() => handleDelete(id)}>X</button>
      </div>
    </>
  );
};
export default TodoItem;
