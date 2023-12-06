import { useContext } from 'react'
import './App.css'

import { GitHub } from './context/GitHubContext'

import Authenticate from './components/authenticate/Authenticate'
import Index from './components/index/Index'

export default function App() {
  const { credentials } = useContext(GitHub)
  return credentials ? <Index/> : <Authenticate/>
}