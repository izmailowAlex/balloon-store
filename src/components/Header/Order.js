import Search from "./Order/Search";
import Basket from "./Order/Basket";
import Price from "./Order/Price";

function Order() {
    return (
        <div className="header__order">
            <Search />
            <Basket />
            <Price />
        </div>
    );
}
  
export default Order;