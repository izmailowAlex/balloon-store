const data = [
  {
    category: 'Bublebox',                            // ------------ BUBLEBOX
    type: "Latex",
    color: 'blue',
    src: '../images/cat.png',
    count: "30",
    id: "1",
    alt: "Image_Buble",
    title: "Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.",
    price: "74",
    oldPrice: "79",
    instock: "нет в наличии",
    discount: "7%",
    status: "лидер",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta recusandae hic velit. Mollitia aspernatur consectetur iure magni amet, cumque ducimus cupiditate quae tenetur accusamus est illo expedita sint reiciendis rerum!"
  },{
    category: 'Bublebox',
    type: "Phoil",
    color: 'red',
    src: '../images/cat.png',
    count: "15",
    id: "2",
    alt: "Image_Buble",
    title: "Шар (28''/71 см) Фигура, Военный джип, Камуфляж, 1 шт.",
    price: "74",
    oldPrice: "79",
    instock: "в наличии",
    discount: "7%",
    status: "лидер",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta recusandae hic velit. Mollitia aspernatur consectetur iure magni amet, cumque ducimus cupiditate quae tenetur accusamus est illo expedita sint reiciendis rerum!"
  },
  {
    category: 'Composition',                            // ------------ COMPOSITION
    type: "Latex",
    color: 'green',
    src: '../images/cat.png',
    count: "40",
    id: "3",
    alt: "Image_Composition",
    title: "Воздушный шар (12''/30 см) Отмечай Эпично, Белый, пастель, 1 ст, 25 шт.",
    price: "56",
    oldPrice: "79",
    instock: "нет в наличии",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta recusandae hic velit. Mollitia aspernatur consectetur iure magni amet, cumque ducimus cupiditate quae tenetur accusamus est illo expedita sint reiciendis rerum!"
  },
  {
    category: 'Room',                            // ------------ ROOM
    type: "Latex",
    color: 'yellow',
    src: '../images/cat.png',
    count: "45",
    id: "4",
    alt: "Image_Room_decoration",
    title: "Шар (18''/46 см) Сердце, Лучшая Мама (цветы), 1 шт. в упак.",
    price: "89",
    oldPrice: "94",
    instock: "в наличии",
    discount: "7%",
    status: "лидер",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta recusandae hic velit. Mollitia aspernatur consectetur iure magni amet, cumque ducimus cupiditate quae tenetur accusamus est illo expedita sint reiciendis rerum!"
  },
  {
    category: 'Room',
    type: "Latex",
    color: 'grey',
    src: '../images/cat.png',
    count: "90",
    id: "5",
    alt: "Image_Room_decoration",
    title: "Шар (18''/46 см) Круг, С Днем Рождения (мишка с подарком), Градиент, 1 шт. в упак.",
    price: "89",
    oldPrice: "94",
    instock: "нет в наличии",
    discount: "7%",
    status: "лидер",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta recusandae hic velit. Mollitia aspernatur consectetur iure magni amet, cumque ducimus cupiditate quae tenetur accusamus est illo expedita sint reiciendis rerum!"
  },
  {
    category: 'Birthday',                            // ------------ BIRTHDAY
    type: "Phoil",
    color: 'purple',
    src: '../images/cat.png',
    count: "57",
    id: "6",
    alt: "Image_Birthday",
    title: "Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.",
    price: "78",
    oldPrice: "101",
    instock: "в наличии",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta recusandae hic velit. Mollitia aspernatur consectetur iure magni amet, cumque ducimus cupiditate quae tenetur accusamus est illo expedita sint reiciendis rerum!"
  },
  {
    category: 'Birthday',
    type: "Phoil",
    color: 'purple',
    src: '../images/cat.png',
    count: "12",
    id: "7",
    alt: "Image_Birthday",
    title: "Шар (18''/46 см) Круг, С Днем Рождения (мишка с подарком), Градиент, 1 шт. в упак.",
    price: "78",
    oldPrice: "120",
    instock: "нет в наличии",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta recusandae hic velit. Mollitia aspernatur consectetur iure magni amet, cumque ducimus cupiditate quae tenetur accusamus est illo expedita sint reiciendis rerum!"
  },
  {
    category: 'Anniversary',                            // ------------ ANNIVERSARY
    type: "Phoil",
    color: 'black',
    src: '../images/cat.png',
    count: "109",
    id: "8",
    alt: "Image_Anniversary",
    title: "Шар (35''/89 см) Фигура, Динозаврик в колпачке, 1 шт.",
    price: "76",
    oldPrice: "99",
    instock: "в наличии",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta recusandae hic velit. Mollitia aspernatur consectetur iure magni amet, cumque ducimus cupiditate quae tenetur accusamus est illo expedita sint reiciendis rerum!"
  },
  {
    category: 'Anniversary',
    type: "Latex",
    color: 'white',
    src: '../images/cat.png',
    count: "97",
    id: "9",
    alt: "Image_Anniversary",
    title: "Шар (27''/69 см) Фигура, Щенок Хаски, 1 шт.",
    price: "76",
    oldPrice: "85",
    instock: "в наличии",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta recusandae hic velit. Mollitia aspernatur consectetur iure magni amet, cumque ducimus cupiditate quae tenetur accusamus est illo expedita sint reiciendis rerum!"
  },
  {
    category: 'Anniversary',
    type: "Phoil",
    color: 'yellow',
    src: '../images/cat.png',
    count: "48",
    id: "10",
    alt: "Image_Anniversary",
    title: "Шар (26''/66 см) Фигура, Лесной Медведь, 1 шт.",
    price: "35",
    oldPrice: "50",
    instock: "нет в наличии",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta recusandae hic velit. Mollitia aspernatur consectetur iure magni amet, cumque ducimus cupiditate quae tenetur accusamus est illo expedita sint reiciendis rerum!"
  }
];

export default data;