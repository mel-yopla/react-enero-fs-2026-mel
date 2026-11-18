interface ProductProps {
  title: string;
  price: number;
  isAvailable: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const dataProducts: ProductProps[] = [
  { title: "Laptop Gamer", price: 1200, isAvailable: true },
  { title: "Mouse Inalámbrico", price: 25, isAvailable: false },
  { title: "Teclado Mecánico", price: 75, isAvailable: true },
];

const Product = ({ title, price, isAvailable }: ProductProps) => {
  return (
    <div className="product-item">
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      {isAvailable ? (
        <p style={{ color: "#1bec1b" }}>En stock</p>
      ) : (
        <p style={{ color: "red" }}>Agotado</p>
      )}
    </div>
  );
};

export default Product;
