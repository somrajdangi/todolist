import { useState } from "react";
function Input(props) {
  const [input, setInput] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    props.handleSubmit(input);
    setInput("");
  }
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        placeholder="input..."
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="item"
        value={input}
      />
      <button className="add">Add</button>
    </form>
  );
}
export default Input;
