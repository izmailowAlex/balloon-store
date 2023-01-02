import Counter from "../UI/Counter/Counter";
import Checkbox from "../UI/Checkbox/Checkbox";

function Catalog() {
  return (
    <div className="main__catalog">
      <h2 className="main__catalog-title">Каталог шаров</h2>
      <div className="main__catalog-contain">
        <div className="main__catalog-filter filter">
          <div className="filter__block">
            <div className="filter__category">
              <span className="filter__block_category-title">Price, $</span>
              <span className="filter__block_category-vector"></span>
            </div>
            <input className="filter__block_dual-slide" type="range"></input>
            <div className="filter__block_wrapper">
              <input className="filter__block-input" type="text" placeholder="от 100"></input>
              <input className="filter__block-input" type="text" placeholder="до 1000"></input>
            </div>
          </div>
          <div className="filter__block">
            <div className="filter__category">
              <span className="filter__block_category-title">Categories</span>
              <span className="filter__block_category-vector active"></span>
            </div>
            <ul className="filter__block_list">
              <li className="list__item">
                <Checkbox>Bublebox</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Composition</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Room</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Birthday</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Anniversary</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Wedding</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Popular</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Banket</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Meeting</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Places</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Number</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Sphere</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Chrome</Checkbox>
              </li>
            </ul>
          </div>
          <div className="filter__block">
            <div className="filter__category">
              <span className="filter__block_category-title">Materials</span>
              <span className="filter__block_category-vector"></span>
            </div>
            <ul className="filter__block_list">
              <li className="list__item">
                <Checkbox>Latex</Checkbox>
              </li>
              <li className="list__item">
                <Checkbox>Phoil</Checkbox>
              </li>
            </ul>
          </div>
          <div className="filter__block">
            <div className="filter__category">
              <span className="filter__block_category-title">Colors</span>
              <span className="filter__block_category-vector"></span>
            </div>
            <ul className="filter__block_list-colors">
              <li className="filter__colors-item">
                <Checkbox className="checkbox_colors checkbox_blue"></Checkbox>
              </li>
              <li className="filter__colors-item">
                <Checkbox className="checkbox_colors checkbox_red"></Checkbox>
              </li>
              <li className="filter__colors-item">
                <Checkbox className="checkbox_colors checkbox_green"></Checkbox>
              </li>
              <li className="filter__colors-item">
                <Checkbox className="checkbox_colors checkbox_yellow"></Checkbox>
              </li>
              <li className="filter__colors-item">
                <Checkbox className="checkbox_colors checkbox_purple"></Checkbox>
              </li>
              <li className="filter__colors-item">
                <Checkbox className="checkbox_colors checkbox_black"></Checkbox>
              </li>
              <li className="filter__colors-item">
                <Checkbox className="checkbox_colors checkbox_grey"></Checkbox>
              </li>
              <li className="filter__colors-item" >
                <Checkbox className="checkbox_colors checkbox_white"></Checkbox>
              </li>
            </ul>
          </div>
        </div>
        <div className="main__catalog_list list">
          <div className="list__card">
            <div className="list__card_image">
              <img className="list__card_image-img" src="../images/cat.png" alt=""/>
            </div>
            <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
            <div className="list__card_bottom">
              <h3 className="list__card_bottom-price">$ 5</h3>
              <Counter/>
              <button className="list__cart-button"></button>
            </div>
          </div>
          <div className="list__card">
            <div className="list__card_image">
              <img className="list__card_image-img" src="../images/cat.png" alt=""/>
            </div>
            <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
            <div className="list__card_bottom">
              <span className="list__card_bottom-price">$ 5</span>
              <Counter/>
              <button className="list__cart-button"></button>
            </div>
          </div>
          <div className="list__card">
            <div className="list__card_image">
              <img className="list__card_image-img" src="../images/cat.png" alt=""/>
            </div>
            <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
            <div className="list__card_bottom">
              <span className="list__card_bottom-price">$ 5</span>
              <Counter/>
              <button className="list__cart-button"></button>
            </div>
          </div>
          <div className="list__card">
            <div className="list__card_image">
              <img className="list__card_image-img" src="../images/cat.png" alt=""/>
            </div>
            <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
            <div className="list__card_bottom">
              <span className="list__card_bottom-price">$ 5</span>
              <Counter/>
              <button className="list__cart-button"></button>
            </div>
          </div>
          <div className="list__card">
            <div className="list__card_image">
              <img className="list__card_image-img" src="../images/cat.png" alt=""/>
            </div>
            <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
            <div className="list__card_bottom">
              <span className="list__card_bottom-price">$ 5</span>
              <Counter/>
              <button className="list__cart-button"></button>
            </div>
          </div>
          <div className="list__card">
            <div className="list__card_image">
              <img className="list__card_image-img" src="../images/cat.png" alt=""/>
            </div>
            <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
            <div className="list__card_bottom">
              <span className="list__card_bottom-price">$ 5</span>
              <Counter/>
              <button className="list__cart-button"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;