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
      <p>{props.price} so'm</p>
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

// 5-vazifa
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="box">
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

// 6-vazifa
export function ToggleText() {
  const [text, setText] = useState("Salom");
  return (
    <div className="box">
      <h3>{text}</h3>
      <button onClick={() => setText(text === "Salom" ? "Xush kelibsiz!" : "Salom")}>
        O'zgartir
      </button>
    </div>
  );
}

// 7-vazifa
export function LikeButton() {
  const [like, setLike] = useState(0);
  return (
    <div className="box">
      <h3>Like: {like}</h3>
      <button onClick={() => setLike(like + 1)}>Like 👍</button>
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

// 9-vazifa
export function DarkMode() {
  const [mode, setMode] = useState("light");
  return (
    <div className={`darkmode`} style={{ backgroundColor: mode === "light" ? "white" : "#222", color: mode === "light" ? "black" : "white" }}>
      <h2>{mode.toUpperCase()} MODE</h2>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        O'zgartir
      </button>
    </div>
  );
}

// 10-vazifa
export function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <img src={props.imgUrl} alt="rasm" />
    </div>
  );
}
