import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const StudentContext = createContext();

export const StudentProvider = (props) =>{

    const [Data , setData] = useState([])



      const fetchStudent = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/");
      setData(response.data);
    } catch (error) {
      console.log("Error in fetching the data", error);
    }
  };

  useEffect(()=>{
    fetchStudent();
  },[])


return(

<StudentContext.Provider value={{Data , fetchStudent}} >
    {props.children}
</StudentContext.Provider>
)

    }