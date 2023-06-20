import Sidebar from "./Sidebar/index";
import Header from "./Header/index";
import TaskList from "./Dragdrop/index";
import "./App.css";
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

const App = () => (
  <div className="App">
    <Sidebar />
    <div>
      <Header />
      <TaskList tasks={TASKS} />
    </div>
  </div>
);

export default App;
