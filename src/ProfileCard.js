function ProfileCard(props) {
  return (
    <div className="card">

      <div className="card-image">
        <figure className="image is-1by1">
         <img src={props.avatar} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <h1 className="title is-4">{props.name}</h1>
          <p className="subtitle is-6">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;