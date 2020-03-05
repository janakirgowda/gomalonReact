import React, {Component} from 'react'
import './Example.css'

class Example extends Component{
    render(){
        return(
            <div>
            <div className="nav-search">
                <div>
                <a className="active" href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Contact">Contact</a>
                </div>
                <div className="search">
                <input type="text" placeholder="Search.."/>
                </div>
               
            </div>
            <div>
                    <h2>Responsive Search Bar</h2>
                    <p>Navigation bar with a search box inside of it.</p>
                    <p>Resize the browser window to see the responsive effect.</p>
                    <p>For more examples on how to add a submit button and icon inside the search bar, go back to the tutorial.</p>

                </div>
            </div>

        )
    }
}

export default Example