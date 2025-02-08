import "./CreateToDoButton.css";

function CreateToDoButton({ setOpenModal }) {
  const handleCreateButton = (event) => {
    console.log("Le diste Click", event.target);
    setOpenModal((state) => !state);
  };
  return (
    <button
      //onClick={(event) => console.log("Le diste Click", event.target)}
      onClick={handleCreateButton}
      className="CreateToDoButton"
    >
      {" "}
      +
    </button>
  );
}

export { CreateToDoButton };
