import { structuredClone } from "structured-clone"

import React from "react"
import logo from "./logo.svg" // Ensure this path matches your actual file structure
import "./App.css" // Ensure this path matches your actual file structure
import MainPage from "./pages/MainPage" // Adjust the path if MainPage is located elsewhere

const App: React.FC = () => {
  return (
    <div className="App">
      {/*       <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to AI Message App</h1>
        <p>Interact with AI and see the results displayed below!</p> 
      </header> 
 */}
      <main>
        <MainPage />
      </main>
    </div>
  )
}

export default App
