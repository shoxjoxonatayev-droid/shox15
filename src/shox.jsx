import { useState } from "react";
// 1-vazifa
export function Header() {
  return <h2 className="box">Header qismi</h2>;
}

export function Content() {
  return <p className="box">Content qismi</p>;
}

export function Footer() {
  return <h3 className="box">Footer qismi</h3>;
}

// 2-vazifa
export function Product(props) {
  return (
    <div className="box">
      <h3>{props.name}</h3>
      <p>{props.price} </p>
    </div>
  );
}

// 3-vazifa
export function Student(props) {
  return (
    <div className="box">
      <h3>{props.name}</h3>
      <p>Yosh: {props.age}</p>
      <p>Sinf: {props.grade}</p>
    </div>
  );
}



// 6-vazifa
export function ToggleText() {
  const [text, setText] = useState("Salom");
  return (
    <div className="box">
      <h3>{text}</h3>
      <button onClick={() => setText(text === "Salom" ? "Xayr!" : "Salom")}>
        O'zgartir
      </button>
    </div>
  );
}


// 8-vazifa
export function NameInput() {
  const [name, setName] = useState("");
  return (
    <div className="box">
      <input onChange={(e) => setName(e.target.value)} placeholder="Ismingizni kiriting" />
      <p>Salom, {name}</p>
    </div>
  );
}
