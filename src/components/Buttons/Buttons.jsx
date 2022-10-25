const Buttons = ({ userDataFetch, addUserHandler, resetUserHandler }) => {
  return (
    <div className="btn-group">
      <button onClick={userDataFetch} className="btn" type="button">
        new user
      </button>
      <button onClick={addUserHandler} className="btn" type="button">
        add user
      </button>
      <button onClick={resetUserHandler} className="btn" type="button">
        Clear Users
      </button>
    </div>
  );
};

export default Buttons;
