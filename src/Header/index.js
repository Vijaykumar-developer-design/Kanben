import { TfiAngleDown } from "react-icons/tfi";
import "./index.css";

const Header = () => (
  <div>
    <div className="headbg">
      <div className="seachbar">
        <div>
          <img
            className="searchimg"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687073674/search-normal_g2mqli.png"
            alt="searchicon"
          />
        </div>
        <div>
          <input
            placeholder="Search for anything..."
            className="search"
            type="text"
          />
        </div>
      </div>
      <div className="imagesdiv">
        <img
          className="headicons"
          alt="img1"
          src="https://res.cloudinary.com/djyawllgy/image/upload/v1687144415/calendar-2_1_wsjywe.png"
        />
        <img
          className="headicons"
          alt="img1"
          src="https://res.cloudinary.com/djyawllgy/image/upload/v1687144415/message-question_1_ylnqad.png"
        />
        <div className="reddiv">
          <img
            className="headicons"
            alt="img1"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687144704/notification_1_grmeie.png"
          />
          <div className="red"></div>
        </div>
      </div>
      <div className="profilediv">
        <div className="location">
          <h1 className="acname">Anima Agarwal</h1>
          <p className="acarea">U.P, India</p>
        </div>
        <div className="arrow">
          <img
            className="profilepic"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1686917444/Mask_Group_oadyas.png"
            alt="acholder"
          />
          <TfiAngleDown className="down" />
        </div>
      </div>
    </div>
    <hr />
    <div className="headdivbg">
      <div className="mappsdiv">
        <h1 className="mapps">Mobile Apps</h1>
        <div className="imgs">
          <img
            className="iconimg"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687076679/arrow-square-up_frpols.png"
            alt="icon"
          />
          <img
            className="grpimgs"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687076679/Group_626_vzaled.png"
            alt="icon"
          />
        </div>
      </div>
      <div className="profilesdiv">
        <img
          src="https://res.cloudinary.com/djyawllgy/image/upload/v1687076671/Group_641_deqhaz.png"
          alt="invite"
        />
        <img
          className="members"
          src="https://res.cloudinary.com/djyawllgy/image/upload/v1687077432/Group_642_mpw6em.png"
          alt="profile"
        />
      </div>
    </div>
    <div className="filtersharediv">
      <div className="filters">
        <button className="fbtn" type="button">
          <img
            className="fbtnimg"
            alt="filter"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687145230/filter-line_fd8lkq.png"
          />{" "}
          Filter{" "}
          <img
            className="fbtnimg"
            alt="down-arrow"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687145230/arrow-down_msknt6.png"
          />
        </button>

        <button className="fbtn" type="button">
          <img
            className="fbtnimg"
            alt="filter"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687145683/calendar_sq3wp2.png"
          />{" "}
          Today{" "}
          <img
            className="fbtnimg"
            alt="down-arrow"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687145230/arrow-down_msknt6.png"
          />
        </button>
      </div>
      <div className="sharediv">
        <button className="sbtn" type="button">
          <img
            className="fbtnimg"
            alt="filter"
            src="https://res.cloudinary.com/djyawllgy/image/upload/v1687142692/profile-2user_1_h2d20z.png"
          />{" "}
          Share
        </button>

        <hr className="hline" />
        <img
          className="equal"
          src="https://res.cloudinary.com/djyawllgy/image/upload/v1687084915/Group_614_yvg8w1.png"
          alt="equal"
        />
        <img
          className="doticon"
          src="https://res.cloudinary.com/djyawllgy/image/upload/v1687144128/menu_rkntdu.png"
          alt="doticons"
        />
      </div>
    </div>
  </div>
);
export default Header;
