import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Reset from './Reset'
import Profile from './Profile'
import Destination from './Destination'
import Choice from './Choice'
import Food from './Food'
import Accomadation from './Accomadation'
import Basicneeds from './Basicneeds'
import Entertainment from './Entertainment'
import Transport from './Transport'
import Fooddetails from './Fooddetails'
import Malldetails from './Malldetails'
import Likedtrips from './Likedtrips'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}>Login</Route>
            <Route path="Signup" element={<Signup/>}>Signup</Route>
            <Route path="Reset" element={<Reset/>}>Resetpassword</Route>
            <Route path="Profile" element={<Profile/>}>Profile</Route>
            <Route path="Destination" element={<Destination/>}>Destination</Route>
            <Route path="Choice" element={<Choice/>}>Choice</Route>
            <Route path="Food" element={<Food/>}>Food</Route>
            <Route path="Fooddetails" element={<Fooddetails/>}>Fooddetails</Route>
            <Route path="Accomadation" element={<Accomadation/>}>Accomadation</Route>
            <Route path="Basicneeds" element={<Basicneeds/>}>Basicneeds</Route>
            <Route path="Entertainment" element={<Entertainment/>}>Entertainment</Route>
            <Route path="Malldetails" element={<Malldetails/>}>Malldetails</Route>
            <Route path="Transport" element={<Transport/>}>Transport</Route>
            <Route path="Likedtrips" element={<Likedtrips/>}>Likedtrips</Route>
        </Routes>
    </BrowserRouter>
  )
}
