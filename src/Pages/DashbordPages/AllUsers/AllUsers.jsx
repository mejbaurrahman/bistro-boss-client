import { Helmet } from "react-helmet-async";
import PageHeading from "../../../Components/DashbordComponents/PageHeading/PageHeading";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import {  FaTrashAlt, FaUser } from "react-icons/fa";
import axios from "axios";


export default function AllUsers() {
    const {user} = useContext(AuthContext)
    const {refetch, data: users =[]} = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
          const response = await fetch(`http://localhost:5000/users`
          );
          const data = await response.json();
          return data;
        }
    })

    const handleMakeAdmin =(user) => {
      axios.patch(`http://localhost:5000/users?email=${user?.email}`)
        .then(response => {
          console.log(response.data)
          refetch()
        })
        .catch(error => console.error(error));
    }
    return (
        <>
        <Helmet>
            <title>Bistro Boss | My Users</title>
        </Helmet>
        <div className="w-5/6">
        <PageHeading subHeading={'How Manys'} heading={'Manage All Users'}></PageHeading>
          <div className="flex  h-10 justify-evenly items-center">
            <div><h1 className="uppercase text-xl font-semibold">Total Users: </h1></div>
          </div>
          
    
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>User Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
           users.map((user, index) => <tr
           key={user.id}
           >
            <td>
              {index}
            </td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>
            <td>
             {user.name}
              
            </td>
            <td>
             {user.email}
              
            </td>
            <td>{user?.role === 'admin'? 'admin': <button onClick={()=>handleMakeAdmin(user)} className="btn btn-warning btn-xs text-white"><FaUser></FaUser></button>}</td>
            <td>
              <button className="btn btn-error text-white btn-xs"><FaTrashAlt></FaTrashAlt></button>
            </td>
          </tr>
            
            )
          }
        </tbody>
        {/* foot */}
        
        
      </table>
    </div>
        </div>
        </>
  )
}
