import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Products from './components/Products.jsx';
import Toggle from './components/Toggle.jsx';

const prod = [
  {
    id: 1,
    image: "https://cdn.pixabay.com/photo/2016/10/17/19/40/indians-1748464_1280.jpg",
    brand: "Roadster",
    title: "Men Solid Round Neck T-shirt",
    price: 599,
    discount: 40
  },
  {
    id: 2,
    image: "https://cdn.pixabay.com/photo/2016/11/29/07/22/bible-1868070_1280.jpg",
    brand: "H&M",
    title: "Printed Cotton T-shirt",
    price: 799,
    discount: 35
  },
  {
    id: 3,
    image: "https://excelr-sb-images.s3.eu-north-1.amazonaws.com/logo1.png",
    brand: "Levis",
    title: "Slim Fit Jeans",
    price: 1499,
    discount: 25
  },
  {
    id: 4,
    image: "https://excelr-sb-images.s3.eu-north-1.amazonaws.com/logo1.png",
    brand: "Nike",
    title: "Running Shoes",
    price: 3299,
    discount: 20
  },
  {
    id: 5,
    image: "https://excelr-sb-images.s3.eu-north-1.amazonaws.com/logo1.png",
    brand: "Adidas",
    title: "Training Shoes",
    price: 2899,
    discount: 30
  }
];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {prod.map((item) => (
      <Products
        key={item.id}
        image={item.image}
        brand={item.brand}
        title={item.title}
        price={item.price}
        discount={item.discount}
      />
    ))}
    <Toggle />
      
  </StrictMode>
)
