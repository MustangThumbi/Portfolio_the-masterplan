import React, { useState, useEffect } from 'react'
import styles from './Style.css';
import YouTube from "react-youtube";



function Home() {
    const [show, handleShow] = useState(false);
    /* const [trailerUrl, setTrailerUrl] = useState("");*/

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);

            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1,
        },
    };

    /*const handleClick = () => {
        if (id) {
            setid("");
        } else {
            movieTrailer().then(url => {

                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));

                })
                .catch((error) => console.log(error));
        }*/



    return (
        <div>

            <div className="top" >
                <div>
                    <div className={
                        'header ${show && "header_black"}'
                    }

                    ><div className="name"><h1>Victor Thumbi</h1></div><nav className="navs"><a href="Home">Home</a><a href="Skills">Skills</a><a href="Contacts">Contacts</a><a href="Hobbies">Hobbies</a></nav>
                    </div>
                </div> 
            <div className="texts" >

<h1> < b id="port"> port </b><b id="folio">folio</b > </h1>
<div id = "statement"><h1 > We go
        for quality trending work and technology </h1>
        <p id="para"> all the latest technology upgrades with state of the art coding skills.We live everyday with reccurring and
            boring activities.With technology we can fix this and focus on other
            things.More interesting and important things. </p></div>
    

    </div >
    < div className="image" >

        <div className="theImage" >

            <img src={process.env.PUBLIC_URL + 'Images/eye.jpg'} width="600" height="470"
                alt="" Style="border-radius:12px" />

        </div>



    </div>


</div>
                        <h1 > SKILLS </h1>
                           <div id="skills" >

                                
        <div className="ai" >
        <div > < h2 id="label" > AI </h2></div >
        <div > < img src={process.env.PUBLIC_URL + 'Images/ai.jpg'} width="200" height="200" alt="" />

                                        
        </div> 
       < div className="decription" ><p > Artificial Intelligence.quality and reliable helper. <br /> Select for more details.</p> </div>
         </div >

                                                
        <div className="ai" >
                      
        <h2 > Web Development </h2> 
        <div > < img src={process.env.PUBLIC_URL + 'Images/web.jpg'} width="200" height="200"   alt="" />
                                                            
        </div> 
        <div className="decription" >
 <p id="field" >
High quality web design full stack Development using frameworks like react and django.Front and backend.<br/> Select for more details. 
        </p> 
        </div>
        </div>
        <div className="ai" >

    <div > <h2 > Animation and Simulation </h2></div >

        <div > < img src={process.env.PUBLIC_URL + 'Images/cat.jpg'} width="200" height="200"   alt="" />
       </div> 
        <div className="decription" >
    
        <p> Animations with smooth resolutions. <br/> Select for more details. 
        </p> 
        </div > 
        </div>


 
        <div className="ai" >
    
        <div > < h2 > Cyber Security </h2></div >

    <
        div > < img src={process.env.PUBLIC_URL + 'Images/hacker.jpg'} width="200"
height="200"
alt="" />

        </div> 
     <div className="decription" >
  
    <p> shield from malwares. < br /> Select
    for more details. 
       </p> 
        </div > 
        </div>


<
div className="ai" >
<
    div > < h2 > Mobile Development </h2></div >


<div > < img src={process.env.PUBLIC_URL + 'Images/mobile.jpg'} width="200"
    height="200"
    alt="" />
    
</div> <
    div className="decription" >
    <
    p > High defination softwares in the palm of your hand. <
        br /> Select
    for more details.
    </p>
    </div>
    </div>




</div>
<h1>HOBBIES</h1>
<div id="Hobbies">
    <div className="ai">
        <div><h1>GYM</h1></div>
        <div><img src={process.env.PUBLIC_URL + 'Images/gym.jpg'} width="200" height="200"
            alt="" />
        </div>
        <div className="decription">
            <p> Clearing my mind greatly and improve health and and flexibility</p>
        </div>
    </div>



    <div className="ai">
        <div><h1>Swimming</h1></div>
        <div><img src={process.env.PUBLIC_URL + 'Images/swimming.jpg'} width="200" height="200"
            alt="" />
        </div>
        <div className="decription">
            <p> water adventures are great and fun.</p>
        </div>


    </div>

    <div className="ai">
        <div><h1>Art</h1></div>
        <div><img src={process.env.PUBLIC_URL + 'Images/drawing.jpg'} width="200" height="200"
            alt="" />
        </div>
        <div className="decription">
            <p> My animating enthusiasm originated from my drawing and painting hobby.</p>
        </div>
    </div>



    <div className="ai">
        <div><h1>Cycling</h1></div>
        <div><img src={process.env.PUBLIC_URL + 'Images/cycling.jpg'} width="200" height="200"
            alt="" />
        </div>
        <div className="decription">
            <p> Going to local adventures with flexible cheap means. Cyling if both fun and effective</p>
        </div>
    </div>


    <div className="Hobbies">
        <div className="ai">
            <div><h1>Hiking</h1></div>
            <div><img src={process.env.PUBLIC_URL + 'Images/hiking.jpg'} width="200" height="200"
                alt="" />
            </div>
            <div className="decription">
                <p> Team building is a key thing to problem solving. Sometimes we go hiking with friends</p>
            </div>
</div>

        </div>


    </div>
 </div>
)
}

 export default Home