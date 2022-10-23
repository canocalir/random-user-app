import UserList from "../UserList/UserList";

const UserTable = ({userList}) => {
  return (
    <table className="table">
      <thead>
        <tr className="head-tr">
          <th className="th">Firstname</th>
          <th className="th">Email</th>
          <th className="th">Phone</th>
          <th className="th">Age</th>
        </tr>
      </thead>
      <tbody>
            {userList.map((user, id) => (
                <tr className="body-tr" key={id}>
                <UserList name={user.name} age={user.age} phone={user.phone} email={user.email}/>
                </tr>
            ))}
      </tbody>
    </table>
  );
};

export default UserTable;
