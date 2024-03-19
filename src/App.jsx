import './App.css'
import NavBar from './component/NavBar/NavBar'
import PriceOptions from './component/PriceOptions/PriceOptions'
import Registration from './component/Registration'


function App() {

  return (
    <>
      <div className='bg-fuchsia-300'>
        <NavBar></NavBar>
        <Registration></Registration>
        <PriceOptions></PriceOptions>
      </div>
    </>
  )
}

export default App
