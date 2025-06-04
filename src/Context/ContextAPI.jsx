import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const StudentContext = createContext();

export const StudentProvider = (props) =>{

    const [Data , setData] = useState([])
    const [CourseData , setCourseData] = useState([])



      const fetchStudent = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/");
      setData(response.data);
      console.log(response)
    } catch (error) {
      console.log("Error in fetching the data", error);
    }
  };

  useEffect(()=>{
    fetchStudent();
    fetchCourse();
  },[])


  const fetchCourse = async () =>{

          try {

          let CourseData =  await axios.get("http://localhost:8000/api/v1/course/get")
          setCourseData(CourseData)

          } catch (error) {
            console.log("error while getting data" , error)
          }
  }

   
return(

<StudentContext.Provider value={{Data , fetchStudent , fetchCourse , CourseData}} >
    {props.children}
</StudentContext.Provider>
)

    }