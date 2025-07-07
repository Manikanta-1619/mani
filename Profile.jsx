import Card from './Card'; // Adjust the path to your Card component

const profileStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '50%',
    border: '2px solid #ccc',
  },
  role: {
    fontSize: '16px',
    color: '#333',
    margin: 0,
  },
};

const Profile = ({ title, role, image }) => {
  return (
    <Card name={title}>
      <div style={profileStyles.container}>
        <img src={"https://excelr-sb-images.s3.eu-north-1.amazonaws.com/logo1.png"} alt={title} style={profileStyles.image} />
        <p style={profileStyles.role}>{role}</p>
      </div>
    </Card>
  );
};

export default Profile;
