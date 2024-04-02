import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Products = () => {
  const [products, setProducts] = useState([]);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.products));
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  console.log(products);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {currentItems?.map((product) => {
          return (
            <li className="flex flex-col" key={product.id}>
              <h3>{product?.title}</h3>
              <img
                className="w-25"
                src={product?.images?.[0]}
                alt={product?.title}
              />
            </li>
          );
        })}
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Products;
