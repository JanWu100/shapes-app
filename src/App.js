import "./App.css";
import ProductContainer from "./components/Layout/ProductContainer";
import picture from "./assets/product-images/p1pic1.png"
import pictureTwo from "./assets/product-images/p1pic2.png"
import pictureThree from "./assets/product-images/p1pic3.png"





function App() {
  const DUMMY_DATA = [
    {
      name: "Produkt najleoszy ze wszystkich",
      price: 34.99,
      colors: ["red", "green", "blue"],
      discount: "50%",
      pictures: [picture,pictureTwo,pictureThree],
      
      id: "p1",
      shortDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus sit amet tortor aliquam suscipit. ",
      longDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus sit amet tortor aliquam suscipit. Proin nibh est, maximus nec arcu eu, bibendum volutpat eros. Pellentesque sit amet fermentum quam, non imperdiet dui. Vestibulum lorem magna, laoreet sit amet neque in, condimentum consequat justo.",
    },
  ];
  return (
    <div className="App">
      <ProductContainer products={DUMMY_DATA}/>
    </div>
  );
}

export default App;
