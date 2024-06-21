import { Route, Routes } from "react-router-dom";
import App from '../App';
import Proudcts from "../container/products";
import Cart from "../container/cart";
import Login from "../container/login";
import Register from "../container/register";

export function Routers(){
    return [
        <>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/products" element={<Proudcts/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<h1>404 page not fount</h1>}/>
            </Routes>
        </>
    ]
}

export default Routers;