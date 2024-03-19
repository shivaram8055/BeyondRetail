import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/CartSlice";
import { Link } from "react-router-dom";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-sm md:px-navbarPadX md:pt-10 px-5 pt-5">
        <Link to="/">Home</Link> {<ChevronRightTwoToneIcon />}{" "}
        {location.pathname.slice(1)}
      </div>
      <div className="md:m-16 m-8">
        <h1>Checkout:</h1>
        {cartItems.length === 0 ? (
          <div className="p-3">
            <h1 className="text-xl text-teal-600 py-2">Cart is Empty</h1>
            <p>Shop our products from below:</p>
            <Link className="font-bold hover:underline" to="/products">
              Shop Now
            </Link>
          </div>
        ) : (
          <div>
            {cartItems.map((item, index) => {
              return (
                <>
                  <div key={index} className="flex items-center" id="index">
                    <img
                      src={item.itemImg}
                      alt={item.title}
                      className="w-32 h-fit p-5"
                    />
                    <div>
                      {" "}
                      <h1>{item.title}</h1>
                      <h2>Price :{item.price}</h2>
                      <button
                        className="border p-1 rounded-lg bg-teal-300 text-teal-900 w-32 hover:text-teal-50 hover:bg-teal-400"
                        onClick={() => {
                          dispatch(removeFromCart({ title: item.title }));
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default CheckOut;
