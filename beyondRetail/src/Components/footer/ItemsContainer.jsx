import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="flex md:justify-around px-5 py-8 flex-col md:flex-row">
      <div className="flex justify-around flex-col">
        <h1
          className="lg:text-2xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          BEYONDRETAIL
        </h1>
        <div className="flex gap-2 flex-col">
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-4 py-2.5 font-[Poppins]
           rounded-md text-white md:w-1/2 w-full text-sm"
          >
            Request Code
          </button>
        </div>
      </div>
      <div className="flex gap-5 md:gap-40 flex-col md:flex-row p-5">
        <Item Links={PRODUCTS} title="PRODUCTS" />
        <Item Links={RESOURCES} title="RESOURCES" />
        <Item Links={COMPANY} title="COMPANY" />
      </div>
    </div>
  );
};

export default ItemsContainer;
