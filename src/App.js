import { useState } from "react";

function Form(props) {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }

  function onSubmit(e) {
    if (value !== "") {
      props.submit(value);
      setValue("");
    }
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="What is in your mind?"
          value={value}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

function ListValue(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>);

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

function App() {
  const [values, setValues] = useState(["James"]);

  function add(val) {
    setValues([...values, val]);
  }

  return (
    <div className="app">
      <Form submit={add} />
      <ListValue data={values} />
    </div>
  );
}

export default App;
