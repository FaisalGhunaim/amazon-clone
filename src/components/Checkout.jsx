import React from "react";
import Header from "./Header";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };

  return (
    <>
      <Header />

      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <h3>Your Shopping Basket</h3>
          <hr></hr>
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
            </div>
          ) : (
            basket.map((item) => {
              return (
                <div className="checkoutProduct">
                  <img src={item.image} className="checkoutProduct__image" />
                  <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{item.title}</p>
                    <p className="checkoutProduct__price">
                      <small>$</small>
                      <strong>{item.price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                      {Array(item.rating)
                        .fill()
                        .map((_) => {
                          return <p>⭐</p>;
                        })}
                    </div>

                    <button onClick={() => removeFromBasket(item.id)}>
                      Remove from basket
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {basket?.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
