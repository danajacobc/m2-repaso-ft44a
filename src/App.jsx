import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Landing from './components/Landing'
import Home from './components/Home'
import Favorites from './components/Favorites'
import Detail from './components/Detail'
import NavBar from './components/NavBar'

const App = () => {
	const {pathname} = useLocation(); //destructuro pathname de useLocation, que nos muestra "donde estamos" ej: /
  
  return (
		<div>
			{pathname !== "/" ? <NavBar /> : null}
			<Routes>
				<Route path="/" element={<Landing />}/>
				<Route path="/home" element={<Home />}/>
				<Route path="/favorites" element={<Favorites />}/>
				<Route path="/detail/:id" element={<Detail />}/>
				<Route path="*" element={<Landing />}/>
			</Routes>
		</div>
  )
}

export default App
