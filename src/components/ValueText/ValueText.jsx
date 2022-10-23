const ValueText = ({userText}) => {
  console.log(userText)
  return (
    <div>
        <p className="user-title">My {userText.type || 'name'} is</p>
          <p className="user-value">{userText.text || 'Random User'}</p>
    </div>
  )
}

export default ValueText