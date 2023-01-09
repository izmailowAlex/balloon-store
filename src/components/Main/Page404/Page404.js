import './Page404.css'
import Button from '../../UI/Button/Button'

function Page404 () {
  return (
    <div className="page404">
      <h1 className="page404__number">404</h1>
      <h2 className="page404__text">Страница не найдена</h2>
      <Button className="page404__button" to="/">
        На главную
      </Button>
    </div>
  )
}

export default Page404
