import React, { useEffect, useState } from "react";


const defaultExpenditureTags = ["bx bx-taxi", "bx bx-train", "bx bx-coffee", 
 "bx bx-restaurant","bx bx-home", "bx bx-store", "bx bx-cart",
  "bx bxs-capsule", "bx bx-bone", "bx bx-run", "bx bx-wrench", "bx bxs-plane-alt"]
const defaultIncomeTags = ["bx bxs-bank", "bx bx-gift", "bx bx-dollar", "bx bx-money", "bx bx-credit-card"];

const otherTags = ["bx bx-beer", "bx bx-car", "bx bx-credit-card","bx bx-drink", "bx bx-gas-pump","bx bx-briefcase", "bx bx-shopping-bag", 
"bx bx-closet", "bx bx-cake", "bx bx-dish", "bx bxs-phone", "bx bx-envelope", "bx bxs-joystick", "bx bx-camera-movie",
"bx bx-gift", "bx bxl-spotify", "bx bx-donate-heart", "bx bxs-music","bx bx-cycling","bx bx-first-aid",
"bx bxl-visa", "bx bx-heart","bx bxl-paypal", "bx bxl-airbnb", 
"bx bxl-amazon", "bx bxl-ebay", "bx bxl-apple"]

const useTags = () => {
    // const [expenditureTags, setExpenditureTags] = useState();
    // const [incomeTags, setIncomeTags] = useState([]);
    // useEffect(()=>{
    //     const localExTags = JSON.parse(window.localStorage.getItem("XpensityExpenditureTags")) || [];
    //     if(localExTags.length !==0){
    //         setExpenditureTags(localExTags)
    //     }else{
    //         setExpenditureTags(defaultExpenditureTags);
    //     }
    // }, []);
    // useEffect(()=>{
    //     const localInTags = JSON.parse(window.localStorage.getItem("XpensityIncomeTags")) || [];
    //     if(localInTags.length !==0 ){
    //         setIncomeTags(localInTags)
    //     }else{
    //         setIncomeTags(defaultIncomeTags);
    //     }
    // }, []);

    const expenditureTags = defaultExpenditureTags;
    const incomeTags = defaultIncomeTags;

    return {expenditureTags, incomeTags}
}

export {defaultExpenditureTags, defaultIncomeTags, otherTags}
