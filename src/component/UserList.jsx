import axios from 'axios';
import React, { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style/userlist.css'


export const UserList = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    const handleUserNavigate = useCallback((inputtedValue)=>{
      navigate('/user', {state : {value : inputtedValue}})
    }, []);


    

    const fetchUserData = useCallback(async ()=>{
           try{
                const response =  await axios.get('https://dummyjson.com/users');
                if(response.status === 200){
                setData(response.data.users);
                }
            }catch(error){
                console.log('ERROR--->' ,error)
           }
      }, []);
      console.log(data)

      const useMemos = useMemo(() => {
        if (data.length > 0) {
          return (
            <div className="image-grid" > 
              {data.map((value, index) => (
                <div className="image-item" key={index} onClick={() => handleUserNavigate(value)}>
                  <div>
                    <img src={value.image} alt="" className="user-image" />
                    <div>
                      <p>{value.firstName}</p>
                      <p>{value.lastName}</p>
                      <p>{value.university}</p>
                      <p>{value.phone}</p>
                      <p>{value.bloodGroup}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        }
      }, [data, handleUserNavigate]);
      
      


      
  return (
    <div>
      <button onClick={fetchUserData}> click me</button>
      <div>{useMemos}</div>
    </div>
  )
}
