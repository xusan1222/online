import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import MainMenu from "./components/mainMenu/MainMenu";
import Message from "./components/Message/Message";
import Search from "./components/search/Search";
import {imgNameWomenCurveMenKids} from "./components/custom/Custom";
import Product from "./components/products/Product";
import { useEffect } from "react";
import ProductFocus from "./components/products/ProductFocus";
import Cart from './components/cart/Cart'

function App() {

  useEffect(() => {
    // {props.datas.map(items=>(items.imgNameSum.map((item)=>(
    //   console.log(item.name)
    //   ))
    //   ))}
    // console.log(imgNameWomenCurveMenKids[0].imgNameSum)
    // console.log('nima gap ');

    // {imgNameWomenCurveMenKids.map(itemss =>(itemss.imgNameSum.map(items =>(items.imgSum.map((item , index)=>
    //  console.log(item)
    //   )))))}

}, [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/message" element={<Message />} />
        <Route path='/cart' element={<Cart />} />
        {imgNameWomenCurveMenKids.map((item , index)=>(
          <Route path={item.to} key={index} element={<MainMenu datas={item.imgNameSum} />}/>
        ))}

        {imgNameWomenCurveMenKids.map(items =>(items.imgNameSum.map((item , index)=>(
          <Route path={item.to} key={index} element={<Product id={"all-"} datas={item.imgSum} />} />
        ))))}

        {imgNameWomenCurveMenKids.map(itemss =>(itemss.imgNameSum.map(items =>(items.imgSum.map((item , index)=>(
          <Route path={item.to} key={index} element={<ProductFocus index={index} id={item.to} cat={items}  name={item} />}/>
        ))))))}
      </Routes>
    </>
  );
}

export default App;
