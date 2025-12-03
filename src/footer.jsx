import { useState } from "react";

// 1
export function Content() {
  return <h2 className="box">1-component</h2>;
}

///3
export function NameInput() {
  const [name, setName] = useState("");
  return (
    <div className="box">
      <input onChange={(e) => setName(e.target.value)} placeholder="Ismingizni kiriting" />
      <p>Salom, {name}</p>
    </div>
  );
}
///4
export function ToggleText() {
  const [text, setText] = useState("Salom");
  return (
    <div className="box">
      <h3>{text}</h3>
      <button onClick={() => setText(text === "Salom" ? "Xayr!" : "Salom")}>
        O'zgartirish
      </button>
    </div>
  );
}
//10d

export function Student(props) {
  return (
    <div className="box">
      <p>Yosh: {props.age}</p>
      <p>Ism: {props.name}</p>
    </div>
  );
}
//6



