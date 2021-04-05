// this function is showing/writing Children of People in list

function Children(props) {
  return (
    <div key={props.firstName} className="row">
      <h4>CHILDREN</h4>
      {props.children.map((child) => {
        return (
          <div key={props.lastName} className="col-sm-6">
            <div className="card bg-warning text-dark">
              <span>
                <img className="avatar" src={child.avatar} alt="resim" />
              </span>
              <div className="card-body">
                <h5 className="card-title">
                  {child.firstName} {child.lastName}
                </h5>
                <span>
                  {child.gender} {child.birthday}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Children;
