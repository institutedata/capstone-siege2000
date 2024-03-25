import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Notices from '../pages/Notices';
import Legislation from '../pages/Legislation';
import Post from '../pages/Post';
import Login from '../pages/Login';
import Specials from '../pages/Specials';
import ShelfLabels from '../pages/ShelfLabels';
import NotFound from '../pages/not-found';
import AddPost from '../pages/AddPost';
import PrintA5 from '../pages/PrintA5';
import StockItem from '../pages/StockItem';
import Stock from '../pages/Stock';
import StockDetails from '../pages/StockDetails';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/notices" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/legislation" element={<Legislation />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/shelflabels" element={<ShelfLabels />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/printA5" element={<PrintA5 />} />
            <Route path="/stockitem" element={<StockItem />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/stock/:stockID" element={<StockDetails />} />

        </Routes>
    )
}