class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <header>
            <style>
                ul {
                    list-style-type: none;
                    margin: 0;
                    margin-left: 7%;
                    margin-right: 7%;
                    padding: 0;
                    overflow: hidden;
                    background-color: #333;
                }
                li {
                  float: left;
                }
                li a {
                  display: block;
                  color: white;
                  text-align: center;
                  padding: 14px 16px;
                  text-decoration: none;
                }
                li a:hover:not(.active) {
                  background-color: #111;
                }
                .active {
                  background-color: #04AA6D;
                }
               
                li.dropdown {
                  display: inline-block;
                }

                .dropdown-content {
                  display: none;
                  position: absolute;
                  background-color: #f9f9f9;
                  min-width: 160px;
                  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                  z-index: 1;
                }

                .dropdown-content a {
                  color: black;
                  padding: 12px 16px;
                  text-decoration: none;
                  display: block;
                  text-align: left;
                }

                .dropdown-content a:hover {
                    background-color: #f1f1f1;
                    color: pink;
                }

                .dropdown:hover .dropdown-content {
                  display: block;
                }
            </style>
        </header>
        <ul>
          <li><a href="/">Home</a></li>
            <li class = "dropdown">
                <a href="/math.html" class="dropbtn">Math</a>
                <div class="dropdown-content">
                  <a href="#quantumn-mechanics">Quantumn Mechanics</a>
                </div>
            </li>
            <li class = "dropdown">
                <a href="/modding.html" class="dropbtn">Modding</a>
                <div class="dropdown-content">
                  <a href="/modding/map_randomizer.html">HGSS Map Randomizer</a>
                  <a href="#plat-coop"> Platinum Co-op (coming soon) </a>
                  <a href="#emerald-no-ai">Emerald no AI</a>
                  <a href="#frlg-hide-and-seek">FRLG Hide and Seek</a>
                  <a href="#b2w2-plush">B2W2 Plushie Mode</a>
                </div>
            </li>
          <li><a href="/contact.html">Contact</a></li>
          <li style="float:right"><a class="active" href="#about">About</a></li>
        </ul>
        `
    }
}

customElements.define('nav-bar', NavBar);
