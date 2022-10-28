import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddStudent from './components/addStudent'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'

class App extends React.Component {
    render(){
        return (
            <AddStudent />
        );
    }
}
export default App