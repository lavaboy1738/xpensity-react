import React, { useEffect, useRef, useState } from "react";


const defaultExpenditureTags: string[] = ["bx bx-taxi", "bx bx-train", "bx bx-coffee", 
 "bx bx-restaurant","bx bx-home", "bx bx-store", "bx bx-cart",
  "bx bxs-capsule", "bx bx-bone", "bx bx-run", "bx bx-wrench", "bx bxs-plane-alt"]

const defaultIncomeTags: string[] = ["bx bxs-bank", "bx bx-gift", "bx bx-dollar", "bx bx-money", "bx bx-credit-card"];

const otherTags: string[] = ["bx bx-beer", "bx bx-car", "bx bx-credit-card","bx bx-drink", "bx bx-gas-pump","bx bx-briefcase", "bx bx-shopping-bag", 
"bx bx-closet", "bx bx-cake", "bx bx-dish", "bx bxs-phone", "bx bx-envelope", "bx bxs-joystick", "bx bx-camera-movie",
"bx bx-gift", "bx bxl-spotify", "bx bx-donate-heart", "bx bxs-music","bx bx-cycling","bx bx-first-aid",
"bx bxl-visa", "bx bx-heart","bx bxl-paypal", "bx bxl-airbnb", 
"bx bxl-amazon", "bx bxl-ebay", "bx bxl-apple"]

const useTags = () => {
    const [expenditureTags, setExpenditureTags] = useState<string[]>([]);
    const [incomeTags, setIncomeTags] = useState<string[]>([]);

    const savedExTags = JSON.parse(window.localStorage.getItem("XpensityExTags") || "[]");
    const savedInTags = JSON.parse(window.localStorage.getItem("XpensityInTags") || "[]");

    //use count to help skip the first two time
    let count = useRef(0);
    useEffect(()=>{
      count.current += 1;
      console.log(count.current)
    })

    //set the initial list, save default list in initialization
    useEffect(()=>{
      if(savedExTags.length > 0){
        setExpenditureTags(savedExTags);
      }else{
        setExpenditureTags(defaultExpenditureTags);
      }
    }, [])
    //listen to changes to the list
    useEffect(()=>{
      if(count.current > 2){
        window.localStorage.setItem("XpensityExTags", JSON.stringify(expenditureTags))
      }
    }, [expenditureTags])

    //set the initial list, save default list in initialization
    useEffect(()=>{
      if(savedInTags.length>0){
        setIncomeTags(savedInTags);
      }else{
        setIncomeTags(defaultIncomeTags);
      }
    }, [])
    //listen to changes to the list
    useEffect(()=>{
      if(count.current > 2){
        window.localStorage.setItem("XpensityInTags", JSON.stringify(incomeTags))
      }
    }, [incomeTags])

    return {expenditureTags, incomeTags, setExpenditureTags, setIncomeTags}
}

export {useTags, otherTags}
