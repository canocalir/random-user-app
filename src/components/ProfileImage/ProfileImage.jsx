import React from 'react'
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const ProfileImage = ({picture}) => {
  return (
    <img src={picture?.large ||defaultImage} alt="random user" className="user-img" />
  )
}

export default ProfileImage