import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div class="navigation">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <p className= "title">Mongo Scraper</p>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    {/* <a href="https://github.com/daynalaurenc/Mongo-Scraper"><i class="fa fa-lg fa-github"
                        aria-hidden="true"></i></a> */}
                </nav>
            </div>
            </div>

            );
      }

export default Navbar;