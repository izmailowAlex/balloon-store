import './Home.css';
import Button from "../UI/Button/Button";

function Home() {
  return (
    <div className="home">
      <div className="home__cover">
        <img className="home__cover-image" src="../images/balloon-cover.jpg" alt="Balloons"/>
      </div>
      <div className="home__content">
        <h1 className="home__title">Воздушные шары</h1>
        <p className="home__description">Воздушные шары на любой праздник. Доставляйте радость с нами!</p>
        <Button href='/catalog'>Смотреть каталог</Button>
      </div>
    </div>
  );
}

export default Home;