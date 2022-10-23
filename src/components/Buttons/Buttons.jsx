const Buttons = ({ userDataFetch, addUserHandler }) => {
  return (
    <div className="btn-group">
      <button onClick={userDataFetch} className="btn" type="button">
        new user
      </button>
      <button onClick={addUserHandler} className="btn" type="button">
        add user
      </button>
    </div>
  );
};

export default Buttons;
