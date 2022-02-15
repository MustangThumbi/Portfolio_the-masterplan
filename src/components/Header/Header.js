import React,
{ useState, useEffect
} from 'react'
import styles from './Header.css';


function Header() {
    const [show, handleShow
    ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },
    []);

    return (
        <div>
			<div className={'header ${show && "header_black"}'
    }>
			<div className="name">
			<h1>Victor Thumbi</h1>

			</div>
			<nav className= "navs">
			
					<a href="Home">Home</a>
					<a href="Skills">Skills</a>
					<a href="Contacts">Contacts</a>
					<a href="Hobbies">Hobbies</a>
			
			</nav>
			</div>
		</div>
    )
}

export default Header