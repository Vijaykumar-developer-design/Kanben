import "./index.css";

const Sidebar = () => (
  <div className="sidebar">
    <div className="subside">
      <img
        className="logo"
        src="https://res.cloudinary.com/djyawllgy/image/upload/v1686917082/Group_7_im4f6u.png"
        alt="logos"
      />
      <h2 className="name">Project M.</h2>
      <img
        className="left"
        src="https://res.cloudinary.com/djyawllgy/image/upload/v1687143533/double-arrow-left_r9pexk.png"
        alt="logos"
      />
    </div>
    <hr className="hrline" />
    <div className="subnav">
      <ul className="ul-list">
        <li className="li">
          <img
            className="homeicon"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687143190/category_1_ksdkyi.png"
            alt="homelogo"
          />
          <h1 className="hometitle">Home</h1>
        </li>
        <li className="li">
          <img
            className="homeicon"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687143021/message_1_n1jsrf.png"
            alt="homelogo"
          />
          <h1 className="messagetitle">Messages</h1>
        </li>
        <li className="li">
          <img
            className="homeicon"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687142872/task-square_1_vb4e8j.png"
            alt="homelogo"
          />
          <h1 className="taskstitle">Tasks</h1>
        </li>
        <li className="li">
          <img
            className="membericon"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687142692/profile-2user_1_h2d20z.png"
            alt="homelogo"
          />
          <h1 className="memberstitle">Members</h1>
        </li>
        <li className="li">
          <img
            className="settingsicon"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687143332/setting-2_1_sgysfs.png"
            alt="homelogo"
          />
          {/* <IoSettingsOutline className="settingsicon" /> */}
          <h1 className="settingstitle">Settings</h1>
        </li>
      </ul>
    </div>
    <hr className="hrline" />
    <div className="pjdiv">
      <h1 className="pjhead">MY PROJECTS</h1>
      <img
        alt="add"
        className="addicon"
        src="https://res.cloudinary.com/djyawllgy/image/upload/v1687144034/add-square_2_i7c0mc.png"
      />
    </div>
    <ul className="ul2">
      <li className="li2">
        <div className="li3">
          <div className="green"></div>
          <h1 className="mapp">Mobile App</h1>
        </div>
        <h1 className="dots">...</h1>
      </li>
      <li className="li4">
        <div className="orange"></div>
        <h1 className="web">Website Redisign</h1>
      </li>
      <li className="li4">
        <div className="gra"></div>
        <h1 className="design">Design System</h1>
      </li>
      <li className="li4">
        <div className="blue"></div>
        <h1 className="design">Wireframes</h1>
      </li>
    </ul>
    <div className="bottomcard">
      <img
        className="bulb"
        alt="bulb"
        src="https://res.cloudinary.com/djyawllgy/image/upload/v1687069547/WhatsApp_Image_2023-06-18_at_11.54.51_AM_ury1dc.jpg"
      />
      <h2 className="thoughts">Thoughts Time</h2>
      <p className="text">
        We don't have any notice for you, till then you can share your thoughts
        with your peers.
      </p>
      <div className="btns">
        <button className="wbtn" type="button">
          Write a message
        </button>
      </div>
    </div>
  </div>
);
export default Sidebar;
