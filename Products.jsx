const Products=({ image, brand, title, price, discount }) =>{
  function cart() {
    alert(`${title} added successfully`)
  }
  return (
    <>
      <img src={image} alt="product image" />
      <h4>{title}</h4>
      <p>{brand}</p>
      <p>{price}-{discount}%</p>
      
      <button onClick={cart}>Add to Cart</button>
      <br />
    </>
  )
}

export default Products;
