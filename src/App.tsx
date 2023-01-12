import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { IProduct } from './interfaces/interface'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { data } from './data'
import './App.css'

interface IAppContext {
  productsLibrary: IProduct[]
}
const context: IAppContext = { productsLibrary: [] }
export const AppContext = React.createContext(context)

function App (): JSX.Element {
  const [productsLibrary] = useState<IProduct[]>(data)

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
