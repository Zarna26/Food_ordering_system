import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props)=> {
    
    const [cartItems , setCartItems] = useState({});

    const [token, setToken] = useState(localStorage.getItem('token') || "");
    const [searchQuery, setSearchQuery] = useState(""); // Add search query state
    
    const url="http://localhost:5000";
    // const [token,setToken] = useState("");
    const [food_list,setFoodList] = useState([])

    const addToCart =async (itemId)=>{
       if(!cartItems[itemId]){
          setCartItems((prev)=>({...prev,[itemId]:1}))
       }
       else{
          setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
       }
       if(token){
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})

       }
    }

    const removeFromCart = async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    
    }
    const getTotalCartAmount =()=>{
        let totalAmount =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo= food_list.find((product)=>product._id===item)
                totalAmount+= itemInfo.price*cartItems[item];

            }
           
        }
        return totalAmount;

    }

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            setFoodList(response.data.data);
          } catch (error) {
            console.error("Error fetching food list:", error);
          }

    }
    const loadCartData = async (token) =>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }
//if you refresh then selected item not be set with 0
    useEffect(()=>{
        
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));

            }
        }
        loadData();

    },[])
    
//for accessing this anywhere
    const contextValue ={
         food_list,
         setFoodList,
         cartItems,
         setCartItems,
         addToCart,
         removeFromCart,
         getTotalCartAmount,
         url,
         token,
         setToken,
         searchQuery,
         setSearchQuery,
        

    }
    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;