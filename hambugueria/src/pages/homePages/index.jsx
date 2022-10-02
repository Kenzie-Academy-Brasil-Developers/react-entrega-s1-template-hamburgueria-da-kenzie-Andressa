import { Header } from "../../components/header";
import { Form } from "../../components/header";
import { Button, GreenButton, ButtonRemove } from "../../components/button";
import { Caption } from "../../components/fonts";
import { Main, UlProducts } from "../../components/Main";
// import { AlreadyExists } from "../../components/AlreadyExists";
import { NotFound } from "../../components/Found";
import { LiProducts } from "../../components/CardProduct";
import { Cart, UlCart, CartHeading } from "../../components/aside";
import { EmptyCart } from "../../components/EmptyCart/index.jsx";
import { CartWithProducts } from "../../components/CartWithProducts";

import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { TotalPrice } from "../../components/TotalPrice";

export const HomePages = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  // const [haveProduct, setHaveProduct] = useState(false);
  const [currentSale, setCurrentSale] = useState([]);
  const [barResult, setBarResult] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setFilteredProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const total = currentSale.reduce(
      (acc, act) => acc + act.price * act.count,
      0
    );
    setCartTotal(total);
  }, [currentSale]);

  // useEffect(() => {}, [haveProduct]);

  const addProductsCart = (element) => {
    const have = currentSale.some((item) => item.id === element.id && item);
    if (have) {
      // setHaveProduct(true);
      const attCart = currentSale.map((item) => {
        if (item.id === element.id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
      setCurrentSale(attCart);
    } else {
      const newCart = {
        ...element,
        count: 1,
      };
      setCurrentSale([...currentSale, newCart]);
    }
  };

  const removeProductsCart = (element, every) => {
    if (every) {
      const newCart = currentSale.filter(
        (item) => item.id !== element.id && item
      );
      setCurrentSale(newCart);
    } else {
      const attCart = currentSale.map((item) => {
        if (item.id === element.id) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      });
      setCurrentSale(attCart);
    }
  };

  const removeAllProductsCart = () => {
    setCurrentSale([]);
  };

  const search = (event) => {
    event.preventDefault();
    const aux = inputSearch.toLowerCase();
    const searchFilter = products.filter((element) => {
      const name = element.name.toLowerCase();
      const category = element.category.toLowerCase();
      return name.includes(aux) ? element : category.includes(aux) && element;
    });
    setBarResult(true);
    setFilteredProducts(searchFilter);
  };
  // console.log(products);
  return (
    <>
      {/* <AlreadyExists show={haveProduct}>
        <button>Sim</button>
        <button>Não</button>
      </AlreadyExists> */}
      <Header>
        <div>
          <img src={logo} alt="" />
          <Form onSubmit={(event) => search(event)}>
            <input
              type="text"
              placeholder="Digitar Pesquisa"
              onChange={(event) => setInputSearch(event.target.value)}
            />
            <GreenButton type="submit">Pesquisar</GreenButton>
          </Form>
        </div>
      </Header>
      <Main>
        <section>
          {barResult === true && (
            <NotFound search={inputSearch}>
              <GreenButton
                onClick={(event) => {
                  event.preventDefault();
                  setFilteredProducts(products);
                  setBarResult(false);
                }}
              >
                Limpar busca
              </GreenButton>
            </NotFound>
          )}

          <UlProducts>
            {filteredProducts.map((element) => {
              const { id, name, category, img, price } = element;

              return (
                <LiProducts
                  key={id}
                  id={id}
                  name={name}
                  category={category}
                  img={img}
                  price={price}
                >
                  <GreenButton
                    onClick={(event) => {
                      event.preventDefault();
                      addProductsCart(element);
                    }}
                  >
                    Adicionar
                  </GreenButton>
                </LiProducts>
              );
            })}
          </UlProducts>
        </section>

        <Cart>
          <CartHeading>
            <h3>Carrinho de compras</h3>
          </CartHeading>

          {currentSale.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <UlCart>
                {currentSale.map((element, index) => {
                  const { id, name, category, img, price, count } = element;

                  return (
                    <CartWithProducts
                      key={`${id},${Math.floor(Math.random() * 100)}`}
                      id={id}
                      name={name}
                      category={category}
                      img={img}
                      price={price}
                    >
                      <div>
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            removeProductsCart(element, true);
                          }}
                        >
                          Remover
                        </Button>
                        <div>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              addProductsCart(element);
                            }}
                          >
                            +
                          </button>
                          <Caption>{count}</Caption>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              removeProductsCart(
                                element,
                                element.count > 1 ? false : true
                              );
                            }}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </CartWithProducts>
                  );
                })}
              </UlCart>

              <TotalPrice price={cartTotal}>
                <ButtonRemove onClick={removeAllProductsCart}>
                  Remover Todos
                </ButtonRemove>
              </TotalPrice>
            </>
          )}
        </Cart>
      </Main>
    </>
  );
};
