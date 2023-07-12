const header = `
<header class="header-container">
    <section class="logo-and-navbar"> 
        <div class="header-logo"> 
            <a href="https://cdproojektred.netlify.app/">
                <img src="" 
                alt="CDPR logo with white font color for dark mode and black font for light mode" />
            </a>
        </div>
        <div class="nav-pages-header">
            <a href="about.html">About Us</a>
            <a href="games.html">Our Games</a>
            <div class="dropdown">
                <a href="jobs.html" class="careers-dropdown">Careers</a>
                <div class="dropdown-content">
                    <ul>
                        <li><a href="#">Meet the Teams</a></li>
                        <li><a href="#">Perks & Benefits</a></li>
                        <li><a href="#">Recruitment Process</a></li>
                        <li><a href="#">Summer Internship</a></li>
                        <li><a href="#">Job Offers</a></li>
                    </ul> 
                </div>
            </div>
        </div>

        <section class="hamburger-btn">
            <button id="hamburgerBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff" 
                opacity="0.5" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0
                    1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0
                    1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <div class="nav-pages d-none">
                <a href="about.html">About Us</a>
                <a href="games.html">Our Games</a>
                <div class="dropdown">
                    <a href="#" return="false">Careers</a>
                    <div class="dropdown-content">
                        <ul>
                            <li><a href="#">Meet the Teams</a></li>
                            <li><a href="#">Perks & Benefits</a></li>
                            <li><a href="#">Recruitment Process</a></li>
                            <li><a href="#">Summer Internship</a></li>
                            <li><a href="#">Job Offers</a></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </section>

    </section>

    <section class="socmed-nav">
        <a href="https://www.facebook.com/CDPROJEKTRED/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="8.47" height="14.5" viewBox="0 0 8.47 15.814">
                <path id="facebook-f" d="M30.8,8.9l.439-2.862H28.5V4.176A1.431,1.431,0,0,1,30.111,2.63H31.36V.193A15.224,15.224,0,0,0,29.144,0,3.494,3.494,0,0,0,25.4,3.852V6.033H22.89V8.9H25.4v6.919H28.5V8.9Z" 
                transform="translate(-22.89)" fill="#fff" opacity="0.35" />
            </svg>
        </a>
        <a href="https://www.linkedin.com/company/cd-projekt-red/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="13.813" height="14.5" viewBox="0 0 13.813 13.813">
                <path id="linkedin-in" d="M3.092,13.823H.228V4.6H3.092ZM1.659,3.343A1.666,1.666,0,1,1,3.317,1.669,1.673,1.673,0,0,1,1.659,3.343ZM13.81,13.823H10.953V9.334c0-1.07-.022-2.442-1.489-2.442-1.489,0-1.717,1.162-1.717,2.365v4.566H4.886V4.6H7.633V5.859h.04a3.009,3.009,0,0,1,2.71-1.489c2.9,0,3.431,1.909,3.431,4.388v5.066Z" 
                transform="translate(0 -0.01)" fill="#fff" opacity="0.35" />
            </svg>
        </a>
        <a href="https://twitter.com/cdprojektred" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.153" height="13" viewBox="0 0 17.153 13.931">
                <path id="twitter" d="M15.39,51.554c.011.152.011.3.011.457a9.934,9.934,0,0,1-10,10A9.934,9.934,0,0
                1,0,60.435a7.273,7.273,0,0,0,.849.044,7.04,7.04,0,0,0,4.364-1.5,3.522,3.522,0,0,1-3.287-2.438,4.433
                4.433,0,0,0,.664.054,3.718,3.718,0,0,0,.925-.12A3.516,3.516,0,0,1,.753.023V52.98a3.541,3.541,0,0,0
                1.589.446,3.521,3.521,0,0,1-1.088-4.7A9.993,9.993,0,0,0,8.446,52.4a3.969,3.969,0,0,1-.087-.805,3.519
                3.519,0,0,1,6.084-2.405,6.921,6.921,0,0,0,2.231-.849,3.506,3.506,0,0,1-1.546,1.937,7.047,7.047,0,0,0
                2.024-.544,7.557,7.557,0,0,1-1.763,1.818Z" transform="translate(0 -48.082)" fill="#fff" opacity="0.35" />
            </svg>
        </a>
        <a href="https://www.youtube.com/user/CDPRED" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11.838" viewBox="0 0 16.821 11.838">
                <path id="XMLID_823_" d="M16.166,46.933c-.607-.722-1.728-1.016-3.869-1.016H4.525c-2.19,0-3.33.313-3.935
                1.082C0,47.748,0,48.852,0,50.38v2.912c0,2.96.7,4.463,4.525,4.463H12.3c1.857,0,2.885-.26
                3.551-.9.683-.653.974-1.72.974-3.566V50.38C16.821,48.769,16.776,47.658,16.166,46.933Zm-5.366,5.3L7.27
                54.083a.543.543,0,0,1-.794-.481V49.925a.543.543,0,0,1,.793-.482L10.8,51.276a.543.543,0,0,1,0,.963Z" 
                transform="translate(0 -45.917)" fill="#fff" opacity="0.35" />
            </svg>
        </a>
        <a href="https://www.instagram.com/cdpred/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="#fff" opacity="0.35" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927
                0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174
                1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99
                5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0
                1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16
                8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 
                3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717
                1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275
                1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0
                1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478
                2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 
                0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24
                1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109
                4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
        </a>
        <a href="https://www.tiktok.com/@cdprojektred" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="#fff" opacity="0.35" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
            </svg>
        </a>
        <a href="https://www.twitch.tv/cdprojektred" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="#fff" opacity="0.35" class="bi bi-twitch" viewBox="0 0 16 16">
                <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
            </svg>
        </a>
        <a href="https://www.glassdoor.com/Overview/Working-at-CD-PROJEKT-RED-EI_IE644250.11,25.htm" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="11.826" height="13.5" viewBox="0 0 11.826 16.557">
                <path id="glassdoor-svgrepo-com" d="M12.89,14.192H3.43a2.364,2.364,0,0,0,2.363,2.365h7.1a2.365,2.365,0,0,0
                2.365-2.365V4.479a.085.085,0,0,0-.086-.086H12.975a.086.086,0,0,0-.085.087v9.713ZM12.89,0a2.366,2.366,0,0,1
                2.364,2.366H5.795v9.712a.087.087,0,0,1-.086.086H3.515a.086.086,0,0,1-.086-.086V2.365A2.366,2.366,0,0,1,5.793,0h7.1" 
                transform="translate(-3.429)" fill="#fff" opacity="0.35"></path></svg>
        </a>
    </section>

    <section class="side-job-offer">
        <a href="#">
            <img src="assets/icons/joboffer.svg" alt="Picture to show Job Offers" />
            <div class="job-offer-link">
                <span>Check</span>
                <span>Job Offer</span>
            </div>
        </a>
    </section>

    <section class="to-top">
        <button id="toTopBtn" onclick="toTopFunction()">
            <img src="assets/icons/arrowtop.svg" alt="an arrow to symbolize going to top page" />
        </button>
    </section>
</header>
`;


const mainEl = document.querySelector('main')
    mainEl.insertAdjacentHTML("beforebegin", header)

    window.addEventListener("load", () => {
        document.querySelector('header').classList.add("header-bg-color");
        document.querySelector('.header-logo').classList.add("change-img");
      });

    
