export function HopePageCenter() {
  return (
    <div className="home-center">

      <div className="left-box">
        <img className="line" src="../../public/line-pink.png" alt="" />
        <h1>Build & manage <br />distributed teams <br />like no one else.</h1>
      </div>
      
      <div className="right-box">

        <div className="info">
          <img className="icon" src="../../public/images/icon-person.svg" alt="" />
          <div className="info-txt">
            <h1>Experienced Individuals</h1>
            <p> Our network is made up of highly experienced professionals who are passionate about what they do. </p>
          </div>
        </div>

        <div className="info">
          <img className="icon" src="../../public/images/icon-cog.svg" alt="" />
          <div className="info-txt">
            <h1>Easy to Implement</h1>
            <p>Our processes have been refined over years of implementation meaning our teams always deliver. </p>
          </div>
        </div>

        <div className="info">
          <img className="icon" src="../../public/images/icon-chart.svg" alt="" />
          <div className="info-txt">
            <h1>Enhanced Productivity</h1>
            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
          </div>
        </div>

      </div>
      <img className="right-img" src="../../public/images/bg-pattern-home-3.svg" alt="" />
    </div>
  );
}
