const PersonalInfo = () => {
    const name = "Akshansh kakkar";
    const role = "Mern Stack Developer";
    const location = "India";
    const email = "akshanshkakkar92@gmail.com"
  return (
    <div className='personal-info'>
        <h2 className='name'>{name}</h2>
        <p className='role'>{role}</p>
        <p className='location'>{location}</p>
        <p className='email'>{email}</p>
    </div>
  );
}

export default PersonalInfo;