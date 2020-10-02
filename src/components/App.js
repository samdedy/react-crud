import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './Header'
import AddModulKelas from './AddModulKelas'
import EditMhs from './EditMhs'
import ListModulKelas from './ListModulKelas'


function App () {
    return (
        <BrowserRouter>
            <Header/>

            <Route path="/" exact component={ListModulKelas}/>
            <Route path="/add" component={AddModulKelas}/>
            <Route path="/edit/:id" component={EditMhs}/>
        </BrowserRouter>
    )
}

export default App