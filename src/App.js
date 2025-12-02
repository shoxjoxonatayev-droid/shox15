import "./App.css";
import {
  Header,
  Content,
  Footer,
  Product,
  Student,
  Counter,
  ToggleText,
  LikeButton,
  NameInput,
  DarkMode,
  Card
} from "./shox";

export default function App() {
  const numbers = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="App">
      <h1>Oddiy Componentlar</h1>
      <Header />
      <Content />
      <Footer />
      <hr />

      <h1>Mahsulotlar</h1>
      <Product name="Non" price={3000} />
      <Product name="Sut" price={6000} />
      <Product name="Olma" price={5000} />
      <hr />

      <h1>Malumot</h1>
      <Student name="Ali" age={14} grade="8A" />
      <Student name="Vali" age={15} grade="9B" />
      <hr />

      <h1>1 dan 10 gacha</h1>
      {numbers.map((n) => (
        <p key={n}>{n}</p>
      ))}
      <hr />

      <h1>Counter</h1>
      <Counter />
      <hr />

      <h1>Almashtirish</h1>
      <ToggleText />
      <hr />

      <h1>Like</h1>
      <LikeButton />
      <hr />

      <h1>Input</h1>
      <NameInput />
      <hr />

      <h1>Dark Mode</h1>
      <DarkMode />
      <hr />

      <h1>Rasm</h1>
      <Card 
        title="" 
        imgUrl="https://artery.uz/wa-data/public/shop/products/03/11/1103/images/5495/5495.970.jpg"
      />
    </div>
  );
}
