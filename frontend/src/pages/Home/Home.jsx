import { Row, Col } from "react-bootstrap";
import Product from "../../components/Product/Product";
import { useGetAllProductsQuery } from "../../slices/productApiSlice";
import Loader from "../../components/Loader/Loader";

function Home() {
  const { data: products } = useGetAllProductsQuery();

  return (
    <>
      {products ? (
        <>
          <h1>All Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Home;
