const header = `
<header class="header-container">
    <section class="logo-and-navbar"> 
        <div class="header-logo"> 
            <a href="https://cdproojektred.netlify.app/">
                <img src="assets/CDPRlogolight.svg" 
                alt="CDPR logo with white font color for dark mode and black font for light mode" />
            </a>
        </div>
        <div class="nav-pages-header">
            <a href="https://www.cdprojektred.com/en/about-us">About Us</a>
            <a href="https://www.cdprojektred.com/en/our-games">Our Games</a>
            <div class="dropdown">
                <a href="https://www.cdprojektred.com/en/jobs" class="careers-dropdown">Careers</a>
                <div class="dropdown-content">
                    <ul>
                        <li><a href="https://www.cdprojektred.com/en/team">Meet the Teams</a></li>
                        <li><a href="https://www.cdprojektred.com/en/perks-and-benefits">Perks & Benefits</a></li>
                        <li><a href="https://www.cdprojektred.com/en/recruitment">Recruitment Process</a></li>
                        <li><a href="https://www.cdprojektred.com/en/internship">Summer Internship</a></li>
                        <li><a href="https://www.cdprojektred.com/en/jobs">Job Offers</a></li>
                    </ul> 
                </div>
            </div>
        </div>

        <section class="hamburger-btn">
            <button id="hamburgerBtn" aria-label="Hamburger Button for Navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fff" 
                opacity="0.5" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0
                    1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0
                    1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <div class="nav-pages d-none">
                <a href="https://www.cdprojektred.com/en/about-us">About Us</a>
                <a href="https://www.cdprojektred.com/en/our-games">Our Games</a>
                <div class="dropdown">
                    <a href="#" return="false">Careers</a>
                    <div class="dropdown-content">
                        <ul>
                            <li><a href="https://www.cdprojektred.com/en/team">Meet the Teams</a></li>
                            <li><a href="https://www.cdprojektred.com/en/perks-and-benefits">Perks & Benefits</a></li>
                            <li><a href="https://www.cdprojektred.com/en/recruitment">Recruitment Process</a></li>
                            <li><a href="https://www.cdprojektred.com/en/internship">Summer Internship</a></li>
                            <li><a href="https://www.cdprojektred.com/en/jobs">Job Offers</a></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </section>

    </section>

    <section class="socmed-nav">
        <a href="https://www.facebook.com/CDPROJEKTRED/" target="_blank" aria-label="CDPR Official Facebook Link">
            <svg xmlns="http://www.w3.org/2000/svg" width="8.47" height="14.5" viewBox="0 0 8.47 15.814">
                <path id="facebook-f" d="M30.8,8.9l.439-2.862H28.5V4.176A1.431,1.431,0,0,1,30.111,2.63H31.36V.193A15.224,15.224,0,0,0,29.144,0,3.494,3.494,0,0,0,25.4,3.852V6.033H22.89V8.9H25.4v6.919H28.5V8.9Z" 
                transform="translate(-22.89)" fill="currentColor" opacity="1" />
            </svg>
        </a>
        <a href="https://www.linkedin.com/company/cd-projekt-red/" target="_blank" aria-label="CDPR Official LinkedIn Link">
            <svg xmlns="http://www.w3.org/2000/svg" width="13.813" height="14.5" viewBox="0 0 13.813 13.813">
                <path id="linkedin-in" d="M3.092,13.823H.228V4.6H3.092ZM1.659,3.343A1.666,1.666,0,1,1,3.317,1.669,1.673,1.673,0,0,1,1.659,3.343ZM13.81,13.823H10.953V9.334c0-1.07-.022-2.442-1.489-2.442-1.489,0-1.717,1.162-1.717,2.365v4.566H4.886V4.6H7.633V5.859h.04a3.009,3.009,0,0,1,2.71-1.489c2.9,0,3.431,1.909,3.431,4.388v5.066Z" 
                transform="translate(0 -0.01)" fill="currentColor" opacity="1" />
            </svg>
        </a>
        <a href="https://twitter.com/cdprojektred" target="_blank" aria-label="CDPR Official Twitter Link">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" opacity="1" class="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
        </a>
        <a href="https://www.youtube.com/user/CDPRED" target="_blank" aria-label="CDPR Official Youtube Link">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11.838" viewBox="0 0 16.821 11.838">
                <path id="XMLID_823_" d="M16.166,46.933c-.607-.722-1.728-1.016-3.869-1.016H4.525c-2.19,0-3.33.313-3.935
                1.082C0,47.748,0,48.852,0,50.38v2.912c0,2.96.7,4.463,4.525,4.463H12.3c1.857,0,2.885-.26
                3.551-.9.683-.653.974-1.72.974-3.566V50.38C16.821,48.769,16.776,47.658,16.166,46.933Zm-5.366,5.3L7.27
                54.083a.543.543,0,0,1-.794-.481V49.925a.543.543,0,0,1,.793-.482L10.8,51.276a.543.543,0,0,1,0,.963Z" 
                transform="translate(0 -45.917)" fill="currentColor" opacity="1" />
            </svg>
        </a>
        <a href="https://www.instagram.com/cdpred/" target="_blank" aria-label="CDPR Official Instagram Link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" opacity="1" viewBox="0 0 16 16">
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
        <a href="https://www.tiktok.com/@cdprojektred" target="_blank" aria-label="CDPR Official Tiktok Link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" opacity="1" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
            </svg>
        </a>
        <a href="https://www.twitch.tv/cdprojektred" target="_blank" aria-label="CDPR Official Twitch Link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" opacity="1" class="bi bi-twitch" viewBox="0 0 16 16">
                <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
            </svg>
        </a>
        <a href="https://www.glassdoor.com/Overview/Working-at-CD-PROJEKT-RED-EI_IE644250.11,25.htm" target="_blank" aria-label="CDPR Official glassdoor Link">
            <svg xmlns="http://www.w3.org/2000/svg" width="11.826" height="13.5" viewBox="0 0 11.826 16.557">
                <path id="glassdoor-svgrepo-com" d="M12.89,14.192H3.43a2.364,2.364,0,0,0,2.363,2.365h7.1a2.365,2.365,0,0,0
                2.365-2.365V4.479a.085.085,0,0,0-.086-.086H12.975a.086.086,0,0,0-.085.087v9.713ZM12.89,0a2.366,2.366,0,0,1
                2.364,2.366H5.795v9.712a.087.087,0,0,1-.086.086H3.515a.086.086,0,0,1-.086-.086V2.365A2.366,2.366,0,0,1,5.793,0h7.1" 
                transform="translate(-3.429)" fill="currentColor" opacity="1"></path></svg>
        </a>
    </section>

    <section class="side-job-offer">
        <a href="https://www.cdprojektred.com/en/jobs">
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

const footer = `
<footer>
    <section class="footer-content">
        <section class="studio-container">
            <h3 class="red-text">Studio Locations</h3>
            <div class="studio-banners">
                <div id="Studio1Warsaw">
                    <h4 class="studio-name">Warsaw</h4>
                    <span class="studio-address"> u. Jagiellońska 74</span>
                    <span class="studio-city">03-301 Warszawa</span>
                </div>
                <div id="Studio2Cracow">
                    <h4 class="studio-name">Cracow</h4>
                    <span class="studio-address">al. 3 Maja 9</span>
                    <span class="studio-city">30-062 Kraków</span>
                </div>
                <div id="Studio3Wroclaw">
                    <h4 class="studio-name">Wroclaw</h4>
                    <span class="studio-address">Quorum Office Park, Gen. Władysława Sikorskiego 26, </span>
                    <span class="studio-city">53-656 Wrocław</span>
                </div>
                <div id="Studio4Vancouver">
                    <h4 class="studio-name">Vancouver</h4>
                    <span class="studio-address">200 - 4190 Lougheed Highway</span>
                    <span class="studio-city">Burnaby, BC, V5C 6A8</span>
                </div>
            </div>
        </section>

        <section class="contact-container">
            <h3 class="red-text">Contact</h3> 
            <div class="contact-category">
                <span class="contact-category-title">Business</span>
                <a href="mailto:biz@cdprojektred.com" class="contact-category-email">biz@cdprojektred.com</a>
            </div>
            <div class="contact-category">
                <span class="contact-category-title">Press</span>
                <a href="mailto:media@cdprojektred.com" class="contact-category-email">media@cdprojektred.com</a>
            </div>
            <div class="contact-category">
                <span class="contact-category-title">Investors</span>
                <a href="mailto:ir@cdprojekt.com" class="contact-category-email">ir@cdprojekt.com</a>
            </div>
            <div class="contact-category">
                <span class="contact-category-title">Streamers & Youtubers</span>
                <a href="mailto:creators@cdprojektred.com" class="contact-category-email">creators@cdprojektred.com</a>
            </div>
            <a href="https://press.cdprojektred.com/en" class="contact-button red-button">Visit Our Press Center</a>
        </section>
    </section>

    <section class="footer-nav">
        <nav class="footer-nav-list">
                <ul>
                    <li>
                        <a href="https://www.cdprojekt.com/en/" target="_blank">
                        Corporate</a>
                    </li>
                    <li>
                        <a href="https://regulations.cdprojektred.com/en/user_agreement" target="_blank">
                        User agreement</a>
                    </li>
                    <li>
                        <a href="https://regulations.cdprojektred.com/en/privacy_policy" target="_blank">
                        Privacy Policy</a>
                    </li>
                    <li>
                        <a href="https://regulations.cdprojektred.com/en/cookie_policy" target="_blank">
                        Cookie Policy</a>
                    </li>
                    <li>
                        <a href="https://gear.cdprojektred.com/" target="_blank">
                        Store</a>
                    </li>
                    <li>
                        <a href="https://forums.cdprojektred.com/" target="_blank">
                        Forum</a>
                    </li>
                    <li>
                        <a href="https://support.cdprojektred.com/" target="_blank">
                        Support</a>
                    </li>
                    <li>
                        <a href="https://www.themolassesflood.com/" target="_blank">
                        TMF</a>
                    </li>
                    <li>
                        <a href="https://spokko.com/" target="_blank">
                        Spokko</a>
                    </li>
                    <li>
                        <a href="https://www.gog.com/" target="_blank">
                        GOG</a>
                    </li>
                </ul>
        </nav> 

        <nav class="socmed-nav socmed-nav-footer">
            <a href="https://www.facebook.com/CDPROJEKTRED/" target="_blank" aria-label="CDPR Official Facebook Link">
                <svg xmlns="http://www.w3.org/2000/svg" width="8.47" height="14.5" viewBox="0 0 8.47 15.814">
                    <path id="facebook-f" d="M30.8,8.9l.439-2.862H28.5V4.176A1.431,1.431,0,0,1,30.111,2.63H31.36V.193A15.224,15.224,0,0,0,29.144,0,3.494,3.494,0,0,0,25.4,3.852V6.033H22.89V8.9H25.4v6.919H28.5V8.9Z" 
                    transform="translate(-22.89)" fill="currentColor" opacity="1" />
                </svg>
            </a>
            <a href="https://www.linkedin.com/company/cd-projekt-red/" target="_blank" aria-label="CDPR Official LinkedIn Link">
                <svg xmlns="http://www.w3.org/2000/svg" width="13.813" height="14.5" viewBox="0 0 13.813 13.813">
                    <path id="linkedin-in" d="M3.092,13.823H.228V4.6H3.092ZM1.659,3.343A1.666,1.666,0,1,1,3.317,1.669,1.673,1.673,0,0,1,1.659,3.343ZM13.81,13.823H10.953V9.334c0-1.07-.022-2.442-1.489-2.442-1.489,0-1.717,1.162-1.717,2.365v4.566H4.886V4.6H7.633V5.859h.04a3.009,3.009,0,0,1,2.71-1.489c2.9,0,3.431,1.909,3.431,4.388v5.066Z" 
                    transform="translate(0 -0.01)" fill="currentColor" opacity="1" />
                </svg>
            </a>
            <a href="https://twitter.com/cdprojektred" target="_blank" aria-label="CDPR Official Twitter Link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" opacity="1" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
            </a>
            <a href="https://www.youtube.com/user/CDPRED" target="_blank" aria-label="CDPR Official Youtube Link">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11.838" viewBox="0 0 16.821 11.838">
                    <path id="XMLID_823_" d="M16.166,46.933c-.607-.722-1.728-1.016-3.869-1.016H4.525c-2.19,0-3.33.313-3.935
                    1.082C0,47.748,0,48.852,0,50.38v2.912c0,2.96.7,4.463,4.525,4.463H12.3c1.857,0,2.885-.26
                    3.551-.9.683-.653.974-1.72.974-3.566V50.38C16.821,48.769,16.776,47.658,16.166,46.933Zm-5.366,5.3L7.27
                    54.083a.543.543,0,0,1-.794-.481V49.925a.543.543,0,0,1,.793-.482L10.8,51.276a.543.543,0,0,1,0,.963Z" 
                    transform="translate(0 -45.917)" fill="currentColor" opacity="1" />
                </svg>
            </a>
            <a href="https://www.instagram.com/cdpred/" target="_blank" aria-label="CDPR Official Instagram Link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" opacity="1" viewBox="0 0 16 16">
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
            <a href="https://www.tiktok.com/@cdprojektred" target="_blank" aria-label="CDPR Official Tiktok Link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="currentColor" opacity="1" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                </svg>
            </a>
            <a href="https://www.twitch.tv/cdprojektred" target="_blank" aria-label="CDPR Official Twitch Link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" opacity="1" class="bi bi-twitch" viewBox="0 0 16 16">
                    <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                    <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                </svg>
            </a>
            <a href="https://www.glassdoor.com/Overview/Working-at-CD-PROJEKT-RED-EI_IE644250.11,25.htm" target="_blank" aria-label="CDPR Official glassdoor Link">
                <svg xmlns="http://www.w3.org/2000/svg" width="11.826" height="13.5" viewBox="0 0 11.826 16.557">
                    <path id="glassdoor-svgrepo-com" d="M12.89,14.192H3.43a2.364,2.364,0,0,0,2.363,2.365h7.1a2.365,2.365,0,0,0
                    2.365-2.365V4.479a.085.085,0,0,0-.086-.086H12.975a.086.086,0,0,0-.085.087v9.713ZM12.89,0a2.366,2.366,0,0,1
                    2.364,2.366H5.795v9.712a.087.087,0,0,1-.086.086H3.515a.086.086,0,0,1-.086-.086V2.365A2.366,2.366,0,0,1,5.793,0h7.1" 
                    transform="translate(-3.429)" fill="currentColor" opacity="1"></path></svg>
            </a>
        </nav>

        <span>© 2023 All rights reserved.</span>

        <div class="Cookie-declaration">
            <span id="cookieDeclaration">Cookie Declaration</span>
            <div id="cookieModal" class="cookie-modal">

            <!-- Modal/PopUp content -->
                <div class="cookie-modal-content">
                    <span class="close-cookie-modal">&times;</span>
                    <div class="cookie-modal-text">
                        <span>Our website uses cookies. </span>
                        <p>Some are required to make the site's features click. 
                            Others are optional and provide us technical and content-related feedback so the site will click better with you.
                            To help us reach you, for example via social media, with something of ours you might find interesting, occasionally we might also share bits of our cookies with our partners. 
                            Any of these optional cookies will require your permission, though.</p>

                        <p>You'll find all the details regarding our use of cookies and tweak your preferences regarding them in the “Settings” menu below. 
                            Once you're good with what's there and are ready to proceed, click “OK”.</p>

                        <span>Cookies are small text files that can be used by websites to make a user's experience more efficient.</span>

                        <p>The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. 
                            For all other types of cookies we need your permission. This site uses different types of cookies. 
                            Some cookies are placed by third party services that appear on our pages.
                        </p>
                        <p>You can at any time change or withdraw your consent from the Cookie Declaration on our website.
                            Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.
                            Your consent applies to the following domains: www.cdprojektred.com</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="catchphrase-logo">
            <img src="assets/CDPRFooterslogan.svg" id="catchphraseLogo" 
            alt="CDPR's Logo: WE ARE REBEL" />
            <div id="catchphraseModal" class="catchphrase-modal">

            <!-- Modal/PopUp content -->
                <div class="catchphrase-modal-content">
                    <span class="close-catchphrase-modal">&times;</span>
                    <div class="catchphrase-modal-text">
                        <h4 class="red-text">Passionate Creators of Story-Driven Role-Playing Games</h4>
                        <span>Like with any good nickname,</span>
                        <span>if a game-dev studio has a catchphrase, it should be something someone says once, then it just sticks. </span>
                        <p>Well, nobody at RED knows who said it first, but “We Are Rebels” has been living with us since forever. 
                            It's on our t-shirts and studio walls; it's something we say, and one of the ways we think. 
                            It's an expression we often add after coming up with something crazy — as well as a casual equivalent of “what can possibly go wrong?”. 
                            And while there's much shared understanding of its exact meaning, there's no singular definition everybody would accept without adding a few words of their own. 
                        </p>
                        <p> 
                            In this phrase, we've found something that unites, but also leaves room for individuality. 
                            And we love it. Being a rebel doesn't always mean acting in opposition. 
                            One of the things we like doing the most is tackling problems we don't initially know how to approach. 
                            I mean, who in their right mind makes an open world TPP RPG, then a card game, and then an FPP RPG? Us, apparently. 
                            Instead of falling into an annualized development cycle, we choose to challenge ourselves, often shooting for the stars. 
                            We're independent and have no corporate overlords, so we have the creative space to experiment, and we're also big enough to leave a mark and attempt things other studios can't. 
                        </p>
                        <p>   
                            Finally, much like every self-respecting rebel, we live to challenge the status quo. 
                            Bad design practices, bad business motivations, bad relations with gamers — they're things we are and will remain vocal about. 
                            For everyone's benefit. This is what it means to be a rebel. 
                            But there's definitely more to it — all of us here are really eager to hear what it means for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>


</footer>

`


const mainEl = document.querySelector('main')
    mainEl.insertAdjacentHTML("beforebegin", header)
    mainEl.insertAdjacentHTML("afterend", footer)

    window.addEventListener("load", () => {
        document.querySelector('header').classList.add("header-bg-color");
        document.querySelector('.header-logo').classList.add("change-img");
      });


// Go to top button :
let goTopBtn = document.getElementById("toTopBtn");

window.onscroll = function() {
    showButtonFunction()
};

function showButtonFunction() {
    if (document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = "block";
      } else {
        goTopBtn.style.display = "none";
      }
}

function toTopFunction() {
    document.documentElement.scrollTop = 0;
}
    
