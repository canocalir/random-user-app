import React, { useEffect, useState } from "react";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/Footer/Footer";
import ProfileImage from "./components/ProfileImage/ProfileImage";
import ValueButtons from "./components/ValueButtons/ValueButtons";
import Buttons from "./components/Buttons/Buttons";
import UserTable from "./components/UserTable/UserTable";
import axios from "axios";

function App() {
  const [data, setUser] = useState([]);
  const [userList, setUserList] = useState([])
  const [userText, setUserText] = useState('');
  const { name, email, dob, phone, picture, login } = data

  const userDataFetch = async () => {
    const url = "https://randomuser.me/api/";
    const {data} = await axios(url)
    setUser(data.results[0]);
    setUserText({
      type: "name",
      text: data.results[0].name.first,
    });
  };

  useEffect(() => {
    userDataFetch();
  }, []);

  const addUserHandler = () => {
  setUserList([...userList.filter((user)=> (
    user.uuid !== login.uuid
  )),{
    name: name?.first,
    email: email,
    phone: phone,
    age: dob?.age,
    uuid: login?.uuid
  }])
  }

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <ProfileImage picture={picture}/>
          <ValueButtons userText={userText} setUserText={setUserText} data={data}/>
          <Buttons addUserHandler={addUserHandler} userDataFetch={userDataFetch}/>
          {userList.length > 0 ? <UserTable userList={userList}/> : null}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
