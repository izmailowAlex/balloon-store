function Catalog() {
    return (
      <div className="main__catalog">
        <h2 className="main__catalog-title">Каталог шаров</h2>
        <div className="main__catalog_contain">
            <div className="main__catalog-filter filter">
                <div className="filter__block">
                    <div className="filter__block_category">
                        <span className="filter__block_category-title">Price, $ </span>
                        <span className="filter__block_category-vector">^</span>
                    </div>
                    <input className="filter__block_input" type="range"></input>
                    <div className="filter__block_wrapper">
                        <input type="text" placeholder="от 100"></input>
                        <input type="text" placeholder="до 1000"></input>
                    </div>
                </div>
                <div className="filter__block">
                    <div className="filter__block_category">
                        <span className="filter__block_category-title">Categories </span>
                        <span className="filter__block_category-vector">^</span>
                    </div>
                    <div className="filter__block_list">
                        <div className="list__item">
                            <input id="bublebox" type="checkbox"></input>
                            <label for="bublebox">Bublebox</label>
                        </div>
                        <div className="list__item">
                            <input id="composition" type="checkbox"></input>
                            <label for="composition">Composition</label>
                        </div>
                        <div className="list__item">
                            <input id="room" type="checkbox"></input>
                            <label for="room">Room</label>
                        </div>
                        <div className="list__item">
                            <input id="birthday" type="checkbox"></input>
                            <label for="birthday">Birthday</label>
                        </div>
                        <div className="list__item">
                            <input id="anniversary" type="checkbox"></input>
                            <label for="anniversary">Anniversary</label>
                        </div>
                        <div className="list__item">
                            <input id="wedding" type="checkbox"></input>
                            <label for="wedding">Wedding</label>
                        </div>
                        <div className="list__item">
                            <input id="popular" type="checkbox"></input>
                            <label for="popular">Popular</label>
                        </div>
                        <div className="list__item">
                            <input id="banket" type="checkbox"></input>
                            <label for="banket">Banket</label>
                        </div>
                        <div className="list__item">
                            <input id="meeting" type="checkbox"></input>
                            <label for="meeting">Meeting</label>
                        </div>
                        <div className="list__item">
                            <input id="places" type="checkbox"></input>
                            <label for="places">Places</label>
                        </div>
                        <div className="list__item">
                            <input id="Number" type="checkbox"></input>
                            <label for="Number">Number</label>
                        </div>
                        <div className="list__item">
                            <input id="sphere" type="checkbox"></input>
                            <label for="sphere">Sphere</label>
                        </div>
                        <div className="list__item">
                            <input id="chrome" type="checkbox"></input>
                            <label for="chrome">Chrome</label>
                        </div>
                    </div>
                </div>
                <div className="filter__block">
                    <div className="filter__block_category">
                        <span className="filter__block_category-title">Materials </span>
                        <span className="filter__block_category-vector">^</span>
                    </div>
                    <div className="filter__block_list">
                        <div className="list__item">
                            <input id="latex" type="checkbox"></input>
                            <label for="latex">Latex</label>
                        </div>
                        <div className="list__item">
                            <input id="phoil" type="checkbox"></input>
                            <label for="phoil">Phoil</label>
                        </div>
                    </div>
                </div>
                <div className="filter__block">
                    <div className="filter__block_category">
                        <span className="filter__block_category-title">Colors </span>
                        <span className="filter__block_category-vector">^</span>
                    </div>
                    <div className="filter__block_list">
                        <input name="blue" type="checkbox"></input>
                        <input name="red" type="checkbox"></input>
                        <input name="green" type="checkbox"></input>
                        <input name="yellow" type="checkbox"></input>
                        <input name="purple" type="checkbox"></input>
                        <input name="black" type="checkbox"></input>
                        <input name="gray" type="checkbox"></input>
                        <input name="white" type="checkbox"></input>
                    </div>
                </div>
            </div>
            <div className="main__catalog_list list">
                <div className="list__card">
                    <div className="list__card_image"></div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <button className="list__card_bottom-minus">-</button>
                        <span className="list__card_bottom-count">20</span>
                        <button className="list__card_bottom-plus">+</button>
                        <button className="list__card_bottom-basket">
                            <image className="list__card_bottom-basket__img" />
                        </button>
                    </div>
                </div>
                <div className="list__card">
                    <div className="list__card_image"></div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <button className="list__card_bottom-minus">-</button>
                        <span className="list__card_bottom-count">20</span>
                        <button className="list__card_bottom-plus">+</button>
                        <button className="list__card_bottom-basket">
                            <image className="list__card_bottom-basket__img" />
                        </button>
                    </div>
                </div>
                <div className="list__card">
                    <div className="list__card_image"></div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <button className="list__card_bottom-minus">-</button>
                        <span className="list__card_bottom-count">20</span>
                        <button className="list__card_bottom-plus">+</button>
                        <button className="list__card_bottom-basket">
                            <image className="list__card_bottom-basket__img" />
                        </button>
                    </div>
                </div>
                <div className="list__card">
                    <div className="list__card_image"></div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <button className="list__card_bottom-minus">-</button>
                        <span className="list__card_bottom-count">20</span>
                        <button className="list__card_bottom-plus">+</button>
                        <button className="list__card_bottom-basket">
                            <image className="list__card_bottom-basket__img" />
                        </button>
                    </div>
                </div>
                <div className="list__card">
                    <div className="list__card_image"></div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <button className="list__card_bottom-minus">-</button>
                        <span className="list__card_bottom-count">20</span>
                        <button className="list__card_bottom-plus">+</button>
                        <button className="list__card_bottom-basket">
                            <image className="list__card_bottom-basket__img" />
                        </button>
                    </div>
                </div>
                <div className="list__card">
                    <div className="list__card_image"></div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <button className="list__card_bottom-minus">-</button>
                        <span className="list__card_bottom-count">20</span>
                        <button className="list__card_bottom-plus">+</button>
                        <button className="list__card_bottom-basket">
                            <image className="list__card_bottom-basket__img" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
  
export default Catalog;