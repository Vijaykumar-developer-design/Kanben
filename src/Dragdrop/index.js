import React, { Component } from "react";
import "./index.css";
const TASKS = [
  {
    id: 1,
    status: "Todo",
    progress: "Low",
    head: "Brainstorming",
    commentSection:
      "https://res.cloudinary.com/djyawllgy/image/upload/v1687094553/Group_634_1_jviwbj.png",
    profile: [
      "https://res.cloudinary.com/djyawllgy/image/upload/v1687097525/Brainstorming_brings_team_members_diverse_experience_into_play._yes2k2.png",
    ],
  },
  {
    id: 2,
    status: "Todo",
    progress: "Low",
    head: "Research",
    commentSection:
      "https://res.cloudinary.com/djyawllgy/image/upload/v1687094637/Group_634_2_twikc6.png",
    profile: [
      "https://res.cloudinary.com/djyawllgy/image/upload/v1687097609/User_research_helps_you_to_create_an_optimal_product_for_users._c0ape6.png",
    ],
  },
  {
    id: 3,
    status: "Todo",
    progress: "High",
    head: "Wireframes",
    commentSection:
      "https://res.cloudinary.com/djyawllgy/image/upload/v1687097823/Group_634_3_bckhbt.png",

    profile: [
      "https://res.cloudinary.com/djyawllgy/image/upload/v1687097671/Low_fidelity_wireframes_include_the_most_basic_content_and_visuals._gokyjb.png",
    ],
  },
  {
    id: 4,
    status: "In Progress",
    progress: "Low",

    head: "Onboarding Illustrations ",
    commentSection:
      "https://res.cloudinary.com/djyawllgy/image/upload/v1687092111/Group_635_rvkmon.png",
    profile: [
      "https://res.cloudinary.com/djyawllgy/image/upload/v1686917919/unsplash_MicqqGyDQ6w_jcgrnc.png",
    ],
  },
  {
    id: 5,
    status: "In Progress",
    progress: "Low",
    head: "Moodboard ",
    commentSection:
      "https://res.cloudinary.com/djyawllgy/image/upload/v1687092111/Group_635_1_g5z9oq.png",
    profile: [
      "https://res.cloudinary.com/djyawllgy/image/upload/v1686918367/unsplash_BS_1XGRkIH4_rxd0pn.png",
      "https://res.cloudinary.com/djyawllgy/image/upload/v1686918374/unsplash_KIqJfzbII9w_by0sak.png",
    ],
  },
  {
    id: 6,
    status: "Completed",
    progress: "Completed",
    head: "Mobile App Design ",
    commentSection:
      "https://res.cloudinary.com/djyawllgy/image/upload/v1687092591/Group_635_2_pneddt.png",
    profile: [
      "https://res.cloudinary.com/djyawllgy/image/upload/v1686918316/Plant_Care_App_Dribbble_shot_1_a6njnj.png",
    ],
  },
  {
    id: 7,
    status: "Completed",
    progress: "Completed",
    head: "Design System",
    commentSection:
      "https://res.cloudinary.com/djyawllgy/image/upload/v1687092591/Group_635_2_pneddt.png",
    profile: [
      "https://res.cloudinary.com/djyawllgy/image/upload/v1687092855/It_just_needs_to_adapt_the_UI_from_what_you_did_before_foamfq.png",
    ],
  },
];
class DragAndDrop extends Component {
  state = {
    items: TASKS,
  };

  onDragStart = (evt, id) => {
    evt.dataTransfer.setData("text/plain", id);
  };

  onDragOver = (evt) => {
    evt.preventDefault();
  };

  onDrop = (evt, container) => {
    const itemId = evt.dataTransfer.getData("text/plain");
    console.log(itemId);
    const { items } = this.state;
    console.log("before", items);
    const item = items.find((item) => item.id.toString() == itemId.toString());
    console.log(item, "find");

    if (item) {
      this.setState((prevState) => ({
        items: prevState.items.map((item) => {
          if (item.id == itemId) {
            return { ...item, status: container };
          }
          return item;
        }),
      }));
    }
  };

  render() {
    const { items } = this.state;
    console.log(items);
    const Todo = items.filter((item) => item.status == "Todo");
    const Progress = items.filter((item) => item.status == "In Progress");
    const Completed = items.filter((item) => item.status == "Completed");
    return (
      <div className="drag-drop-container">
        <div
          className=" todocontainer"
          onDragOver={(evt) => this.onDragOver(evt)}
          onDrop={(evt) => this.onDrop(evt, "Todo")}
        >
          <div className="todotop">
            <div className="dotd">
              <div className="tdot"></div>
              <h1 className="todohead">To Do</h1>
              <p className="tcount">{Todo.length}</p>
            </div>

            <img
              className="todoadd"
              src="https://res.cloudinary.com/djyawllgy/image/upload/v1687088753/add-square_1_pbqetw.png"
              alt="add"
            />
          </div>
          <hr className="hrt" />
          {Todo.map((item) => {
            const { progress, head, commentSection, profile } = item;
            return (
              <div
                className="smallcard"
                key={item.id}
                draggable
                onDragStart={(evt) => this.onDragStart(evt, item.id)}
              >
                {item.head}
                <div className="order progressdiv">
                  <p className="status">{progress}</p>
                  <p className="pdots">...</p>
                </div>

                <h1 className="heading">{head}</h1>
                {profile.length > 1 ? (
                  <ul className="ulimages">
                    {profile.map((each) => (
                      <li className="imglist">
                        <img className="imglistimg" src={each} alt={head} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <img className="singleimg" src={profile[0]} alt={head} />
                )}

                <img className="commentimg" src={commentSection} alt={head} />
              </div>
            );
          })}
        </div>

        <div
          className="onprogresscontainer"
          onDragOver={this.onDragOver}
          onDrop={(evt) => this.onDrop(evt, "In Progress")}
        >
          <div className="dotd">
            <div className="pdot"></div>
            <h1 className="progresshead">On Progress</h1>
            <p className="tcount">{Progress.length}</p>
          </div>
          <hr className="hrp" />
          {Progress.map((item) => {
            const { progress, head, commentSection, profile } = item;
            return (
              <div
                className="smallcard"
                key={item.id}
                draggable
                onDragStart={(evt) => this.onDragStart(evt, item.id)}
              >
                {item.head}
                <div className="pending progressdiv">
                  <p className="status">{progress}</p>
                  <p className="pdots">...</p>
                </div>
                <h1 className="heading">{head}</h1>
                {profile.length > 1 ? (
                  <ul className="ulimages">
                    {profile.map((each) => (
                      <li className="imglist">
                        <img className="imglistimg" src={each} alt={head} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <img className="singleimg" src={profile[0]} alt={head} />
                )}
                <img className="commentimg" src={commentSection} alt={head} />
              </div>
            );
          })}
        </div>

        <div
          className="donecontainer"
          onDragOver={(evt) => this.onDragOver(evt)}
          onDrop={(evt) => this.onDrop(evt, "Completed")}
        >
          <div className="todotop">
            <div className="dotd">
              <div className="cdot"></div>
              <h1 className="comhead">Done</h1>
              <p className="tcount">{Completed.length}</p>
            </div>
          </div>
          <hr className="hrc" />
          {Completed.map((item) => {
            const { progress, head, commentSection, profile } = item;
            return (
              <div
                className="smallcard"
                key={item.id}
                draggable
                onDragStart={(evt) => this.onDragStart(evt, item.id)}
              >
                <div className="done progressdiv">
                  <p className="status">{progress}</p>
                  <p className="pdots">...</p>
                </div>
                <h1 className="heading">{head}</h1>

                {profile.length > 1 ? (
                  <ul className="ulimages">
                    {profile.map((each) => (
                      <li className="imglist">
                        <img className="imglistimg" src={each} alt={head} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <img className="singleimg" src={profile[0]} alt={head} />
                )}

                <img className="commentimg" src={commentSection} alt={head} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DragAndDrop;
