import React from 'react'
import styles from './Footer.css'

function Footer() {
    return (
        <div>
			<h> Contacts</h>
			<div className="Contacts">
			<div className="cells">
			<h1>Cells</h1>
			<p>< img src={process.env.PUBLIC_URL + 'Images/call.png'} width="20" height="30"   alt="" />+254748218541</p>
			</div>
			<div className="About">
			<h1>About</h1>
			<p> If you need to get intatch with me with <br/>
			any of the
			stated fields above, hola me at <br/>any platform indicated. Thankyou for reaching <br/>out to me. 
			I will be my pleasure to <br/>deliver to you my quality work </p>
			</div>
			<div className="socials">
			<h1>Socials</h1>
			<a href="https://twitter.com/VictorC32353855"> <img src={process.env.PUBLIC_URL + 'Images/twitter.png'} width="50" height="50"
            alt="" /></a>
			<a href="https://github.com/VickyThumbi/"> <img src={process.env.PUBLIC_URL + 'Images/github.png'} width="50" height="50"
            alt="" /></a>
			<a href="https://www.linkedin.com/in/victor-thumbi-818417207/"> <img src={process.env.PUBLIC_URL + 'Images/in_logo.png'} width="50" height="50"
            alt="" /></a>
			</div>
			<div className="misc">
			<h1>Misc</h1>
			<p> Follow me on twitter for more blog <br/> and where about of technology and upcoming inventions</p>
			<p>Made with pride by Victor Thumbi @copyright all right reserved</p>
			</div>

			</div>
		</div>
    )
}

export default Footer