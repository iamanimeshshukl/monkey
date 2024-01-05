import React, { useContext, useEffect, useState ,} from "react";
 export const API_URL ="http://www.omdbapi.com/?apikey=b77f21a5";
 const AppContext = React.createContext();
 const AppProvider = ({children})=>{
    const [loading , setLoading]=useState(true);
    const [movie, setMovie]=useState([]);
    const [error , setError ]=useState({show:"false",msg:""});
    const [query , setQuery] = useState("avengers");

const getMovies = async(url)=>{
    try{
     const res = await fetch(url);
     const data =await res.json();
     console.log(data);
     if(data.Response === "True"){
     setLoading(false);
     setMovie(data.Search) 
    }else{
        setError({
            show:true,
            msg:data.error,
        });
    }
    
    }catch(error){
        console.log(error)
    }
}


useEffect(()=>{
    getMovies(`${API_URL}&S=${query}`);
},[query])

    return <AppContext.Provider value = {{loading ,error ,movie ,setQuery , query}}>{children}</AppContext.Provider>
};

const useGlobalContext = ()=>{
    return useContext(AppContext);
};

export {AppContext , AppProvider , useGlobalContext };
