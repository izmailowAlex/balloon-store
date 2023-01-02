import BagShopping from '../../../images/bag-shopping.svg'

function Basket() {
    return (
        <div className="header__order-basket">
            <img src={BagShopping} alt="Bag Shopping"></img>
        </div>
    );
}
  
export default Basket;