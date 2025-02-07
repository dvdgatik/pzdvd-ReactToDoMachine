import "./CreateToDoButton.css";

function CreateToDoButton({ setOpenModal }) {
  const handleCreateButton = (event, setOpenModal) => {
    console.log("Le diste Click", event.target);
    setOpenModal(true);
  };
  return (
    <button
      //onClick={(event) => console.log("Le diste Click", event.target)}
      onClick={() => handleCreateButton(setOpenModal)}
      className="CreateToDoButton"
    >
      {" "}
      +
    </button>
  );
}

export { CreateToDoButton };
