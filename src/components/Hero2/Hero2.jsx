import './Hero2.css'

const Hero2 = ({ title, subtitle, backgroundImage }) => {
    const heroStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <div className="hero2" style={heroStyle}>
        <div className="hero2-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

export default Hero2;