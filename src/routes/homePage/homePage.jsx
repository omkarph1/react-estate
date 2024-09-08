import SearchBar from "../../components/searchBar/searchBar"
import "./homePage.scss"

function HomePage(){
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate And Get Your Dream Place</h1>
                    <p>The key to your dream home unlocks more than just a door—it opens a world of possibilities. Let us guide you to the place where your aspirations meet reality.</p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <p>Year Of Experience</p>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <p>Awards Gained</p>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <p>Property Ready</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage