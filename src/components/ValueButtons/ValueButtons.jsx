import mailSvg from "../../assets/mail.svg";
import womanSvg from "../../assets/woman.svg";
import womanAgeSvg from "../../assets/growing-up-woman.svg";
import mapSvg from "../../assets/map.svg";
import phoneSvg from "../../assets/phone.svg";
import padlockSvg from "../../assets/padlock.svg";
import ValueText from "../ValueText/ValueText";

const ValueButtons = ({ data, setUserText, userText }) => {
  
  const iconHandler = (e) => {
    if (e.target.alt === "user") {
      setUserText({ type: "name", text: data?.name?.first });
    }else if(e.target.alt === "mail"){
      setUserText({ type: "email", text: data?.email });
    }else if(e.target.alt === "age"){
      setUserText({ type: "age", text: data?.dob?.age });
    }else if(e.target.alt === "map"){
      setUserText({ type: "location", text: data?.location?.country });
    }else if(e.target.alt === "phone"){
      setUserText({ type: "phone", text: data?.phone });
    }else if(e.target.alt === "lock"){
      setUserText({ type: "password", text: data?.login?.password });
    }
  };

  return (
    <>
      <ValueText userText={userText} />
      <div className="values-list">
        <button onClick={iconHandler} className="icon" data-label="name">
          <img src={womanSvg} alt="user" id="iconImg" />
        </button>
        <button onClick={iconHandler} className="icon" data-label="email">
          <img src={mailSvg} alt="mail" id="iconImg" />
        </button>
        <button onClick={iconHandler} className="icon" data-label="age">
          <img src={womanAgeSvg} alt="age" id="iconImg" />
        </button>
        <button onClick={iconHandler} className="icon" data-label="street">
          <img src={mapSvg} alt="map" id="iconImg" />
        </button>
        <button onClick={iconHandler} className="icon" data-label="phone">
          <img src={phoneSvg} alt="phone" id="iconImg" />
        </button>
        <button onClick={iconHandler} className="icon" data-label="password">
          <img src={padlockSvg} alt="lock" id="iconImg" />
        </button>
      </div>
    </>
  );
};

export default ValueButtons;
