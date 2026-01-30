export default function Home() {
  return (
    <>
      <div className="header">
        <div className="overlay-text">
          <h1>Skin For Skin</h1>
          <nav className="tabs">
            <a href="#OurMission">About Us</a>
            <a href="ourTeam.html">Our Team</a>
            <a href="getInvolved.html">Get Involved</a>
          </nav>
        </div>

        <div className="image-container">
          <img className="base-image" src="/assets/hand.jpg" alt="Image of 2 hands reaching to each other." />
          <img className="overlay-image" src="/assets/green.jpg" alt="Translucent green over base image." />
          <img
            className="hero-logo"
            src="/assets/sfslogo.png"
            alt="Skin for Skin Logo. A circle with peach, purple, and green shapes in it. The outline of a face spells out the letter S, and the rest of the name Skin for Skin is spelled out."
          />
        </div>
      </div>

      <main>
        <div id="OurMission" className="Title">Our Mission</div>
        <div className="missionContent">
          <p>
            Skin for Skin is a dedicated student-led organization committed to providing comprehensive
            support and resources for individuals affected by skin diseases, with a focus on skin
            cancer. Our mission is to improve the quality of life for those grappling with these
            serious conditions through education, advocacy, and community support. We aim to achieve
            this through outreach events and fundraisers. Together, we can raise awareness for skin
            disease and work towards a brighter, healthier future for all!
          </p>
          <img
            id="logoTwo"
            src="/assets/sfslogo.png"
            alt="Skin for Skin Logo. A circle with peach, purple, and green shapes in it. The outline of a face spells out the letter S, and the rest of the name Skin for Skin is spelled out."
          />
        </div>

        <div className="Title">Our Impact</div>
        <div className="impactContent">
          <p>200+ Books Donated to Cook Children's Hospital in June 2024</p>
          <div className="cooks">
            <p>Cook Children's <br />Hospital Book Drive</p>
            <img
              id="cook1"
              src="/assets/cook.jpeg"
              alt="Stack of books collected for the Cook Children's Book Drive"
            />
            <img
              id="cook2"
              src="/assets/carPic.jpg"
              alt="Image of the SFS team holding books collected for the Cook Children's Book Drive"
            />
          </div>
        </div>

        <div className="Contact">
          <p>Contact Us</p>
          <div className="wrapper">
            <div className="section">
              <i className="fas fa-envelope" />skinforskin.sfs@gmail.com
            </div>
            <div className="section">
              <i className="fab fa-instagram" />@skinforskin.sfs
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
