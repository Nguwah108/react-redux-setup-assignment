import React from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../store/actions/userAction';
import { useEffect } from 'react';

const ComponentC = ({usersUi,FetchGetUser}) => {
  //console.log("UsersUI",usersUi);
   useEffect(() => {
    FetchGetUser()
   },[]);
   
  //  console.log("UsersUI",usersUi);

  return (
      <div>
        <h1>ComponentC</h1>
        {
           usersUi && 
           usersUi.map((e)=>{
            <div key={e.id}>
              <span>Name: {e.username}</span>
              <span> Phone: {e.phone}</span>
            </div>
          })
        }
      
        </div>
  )
}

const mapStateToProps = (state) => ({
    usersUi :state?.usersRoot?.users //api array
})
const mapDispatchToProps={
  FetchGetUser: getUsers
}

export default  connect(mapStateToProps,mapDispatchToProps) (ComponentC)