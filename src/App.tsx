import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { IProduct } from './interfaces/interface'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { data } from './data'
import './App.css'

interface IAppProps {
  productsLibrary: IProduct[]
}

export const AppContext = React.createContext({} as IAppProps)

function App (): JSX.Element {
  const [productsLibrary, setProductsLibrary] = useState<IProduct[]>(data)

  return (
    <div className="balloon">
      <AppContext.Provider value={{ productsLibrary }}>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
      </AppContext.Provider>
      <span className="balloon__circle balloon_red"></span>
      <span className="balloon__circle balloon_yellow"></span>
      <span className="balloon__circle balloon_blue"></span>
    </div>
  )
}

export default App
