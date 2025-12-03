
import {
  Header,
  Content,
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
      1.
      <h1>Reactga xush kelibsiz !</h1>
      2.
      <Header />
      <Content />
  
      3.
      <NameInput />
      4.

      <ToggleText />
    
       10.
      <Student name="Ali" age={16}  />
      <Student name="Laylo" age={17}  />
      <Student name="Sardor" age={16}  />
      7.
      <h1>Mahsulotlar</h1>
      <Product name="title"  />
      <Product name="img" />
      <Product name="text"  />
      
    </div>
  );
}
