import "./App.css";
import Header from "./components/header/header";
import Firstconteiner from "./components/firstconteiner/firstconteiner";

import "./App.css";
import Reasons from "./components/mainSection/ReasonsPart";
import Research from "./components/mainSection/ResearchPart";
import Blogs from "./components/mainSection/blogs";
import Testimonials from "./components/footerPart/testimonials";
import MapAndFooter from "./components/footerPart/footerLastPart";

import Img1 from "./components/pictures/blogPic1.png";
import Img2 from "./components/pictures/blogPic2.png";
import Img3 from "./components/pictures/blogPic3.png";

import ProfilePic1 from "./components/pictures/userImage1.png";
import ProfilePic2 from "./components/pictures/userImage2.png";
import ProfilePic3 from "./components/pictures/userImage3.png";

function App() {
    const blogsObject = [
        {
            image: Img2,
            title: "Lorem Ipsum is ",
            desc: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
            userImage: ProfilePic3,
            userName: "Alex Liones",
            time: "28,Aug 2020, 09:48:00",
        },
        {
            image: Img1,
            title: "Lorem Ipsum is ",
            desc: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
            userImage: ProfilePic2,
            userName: "Alex Liones",
            time: "28,Aug 2020, 09:48:00",
        },
        {
            image: Img3,
            title: "Lorem Ipsum is ",
            desc: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
            userImage: ProfilePic1,
            userName: "Alex Liones",
            time: "28,Aug 2020, 09:48:00",
        },
    ];
    return (
        <div className="App">
            <Header />
            <Firstconteiner />
            <Reasons />
            <Research />
            <Blogs blogObj={blogsObject} />
            <Testimonials />
            <MapAndFooter />
        </div>
    );
}

export default App;
