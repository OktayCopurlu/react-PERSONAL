// this function is showing/writing Friends of People in list

function Friends(props) {
  return (
    <div key={props.firstName}>
      <h4>FRIENDS</h4>
      {props.friends.map((friend) => {
        return (
          <div key={props.lastName} className="card bg-secondary text-white">
            <span>
              <img className="avatar" src={friend.avatar} alt="resim" />
            </span>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                {friend.firstName} {friend.lastName}
              </h5>
              <table>
                <thead>
                  <tr>
                    <th>ADRES</th>
                    <th>SALARY</th>
                    <th>GENDER</th>
                    <th>BIRTHDAY</th>
                    <th>CITY</th>
                    <th>LANGUAGE</th>
                    <th>PHONE</th>
                    <th>PROFESSION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{friend.address}</td>
                    <td>{friend.salary}</td>
                    <td>{friend.gender}</td>
                    <td>{friend.birthday}</td>
                    <td>{friend.city}</td>
                    <td>{friend.language}</td>
                    <td>{friend.phone}</td>
                    <td>{friend.profession}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Friends;
