import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddBook from '../components/AddBook'
import Books from '../components/Books'
import Header from '../components/Header'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className='main-content'>
                    <Routes>
                        <Route component = {Books} path = "/" exact = 'true'/>
                        <Route component = {AddBook} path = "/add" />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter