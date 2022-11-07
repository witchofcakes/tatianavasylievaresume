import React, { Component } from 'react';
import { HashRouter,Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import Landing from '../components/landing.js';

const Main = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Landing />} />
        </Routes>
    </BrowserRouter>
)

export default Main;