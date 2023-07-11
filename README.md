[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/f6dTnkNL)
# Week 5 : Project Milestone 1

For the 1st Milestone Project, we are to make a company profile website using everything we've learned so far about HTML and CSS.


The Main Focus for the project are:
1. Semantic HTML
- Using appropriate tags that fits each role
- Headings tags 
- Paragraph tags 
- Lists tags
2. Responsive design
- CSS Media Queries
- relative units
- easy-to-read typography and font sizes
3. Custom Domain and DNS Configuration
- Using custom domain previously bought from domestic registrar "Niagahoster"
- Connecting and Managing custom domain with "Cloudfare"
- Deploying site through "Netlify" and connecting custom domain with Netlify's subdomain
4. Technical Writing
- Proficiency in 'Technical Writing' to create clear and concise documentation.

## Deployed Website
<p align="center">
<a href="https://cdproojektred.netlify.app/">cdproojektred.netlify.app</a>
|
<a href="https://roozone.site/">roozone.site</a>
|
<a href="https://www.roozone.site/">www.roozone.site</a>
</p>

## Pre-development Stage

### Terminal, VS Code, and Github
<b>What is a terminal?</b>
Terminal is a program that we use to type in commands for the system to follow. In a simpler term, it's the tool that we use to communicate with our device to have them do whatever we need them to do. Each operating system has their own built-in terminal but we can also download external terminal if we want to. 

Windows and Linux have differing commands, to solve this possibly-minor-issue, we can use Git Bash on windows, it's an application that basically allows Windows users to use linux commands on Windows.

[Author's Note: [Check this link out](https://www.geeksforgeeks.org/linux-vs-windows-commands/) for a comprehensive comparison between linux and windows commands.]

**What is Visual Studio Code?**
Visual Studio Code, usually referred to as VS Code, is a free and powerful source-code editor made by Windows that can be used by all Windows, Linux, and macOS users. This is where we will build our projects and other things such as debugging and version controlling. 


**Github and their repository**
Github is a widely-used platform that provides services in software development. Through Github, we can also collaborate with our team on any project.

Github repository contains all of our project's files and even each file's revision history. This means, whatever we work on, as an individual or as a team, we are able to check the project's changes or updates from the very beginning to the latest state. 

A repository starts out with one main branch that has an empty 'readme.md' file in it. Once we start on a project, it's a commonly advised practice to create branches, either for each individual to use or for each task to be worked on.

### Accepted the assignment, what's next?
The first and foremost thing to do after accepting a task is git clone the Github repository to our device's local storage. This part is where Terminal comes in to our rescue.

1. First, we need to copy the repository link.
![Copying-Repository-Link](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/Copyingrepolink.webp)


2. And then, open the terminal of your choice. Be especially aware that git clone will directly clone the repository into the directory you're currently in (i.e if your position is currently in desktop, your repository folder will be cloned to desktop.) 
 To prevent cloning into the wrong directory, use this command to check: `cd`
 - You may also use `cd` to change directory, i.e `cd e:`
- Once you're in the right directory, proceed to clone the repository using this command:
 `git clone (insert the copied repository link)` 
i.e `git clone https://github.com/RevoU-FSSE-2/week-5-SherinOlivia.git`

3. Next, using the same terminal, we can go ahead and move into the repository folder to create the needed files or folders for the development process
- to create new folder, use `mkdir folder-name` i.e `mkdir assets`
- to create new file, use `touch file-name`` i.e `touch index.html`, `touch style.css`, `touch responsive.css`

4. Once set, use `code .` to open the project in VS Code. 

### Dive straight into VS Code? Really?

![Benjamin-Franklin-Quote?](https://quotefancy.com/media/wallpaper/1600x900/3006-Benjamin-Franklin-Quote-By-failing-to-prepare-you-are-preparing-to.jpg)

Of course not! We are not supposed to enter the lion's den unprepared. 
To prepare ourselves, we need **ideas.**

Ideas can be obtained by browsing the internet, talking and discussing with your teammates or friends, or even consulting with your team leader. Make sure that the ideas that you come up with or agreed upon by the team, fit with the whole picture of the project. We do not bump into Barbie in Skyrim, now do we?

**Useful tools that we can use during brainstorming/planning**
- [Figma](https://www.figma.com/), a free collaborative interface design tool that helps us design anything such as logos, applications, websites, etc.
![Figma's-Homepage](https://miro.medium.com/v2/resize:fit:4488/1*VyzNojpL-s1tEd3_cHECzw.png)

- [Coolors](), a free website where we are able to create our own color palette, or browse through the thousands of color palettes available. We are also able to upload any image to the site to extract the color palette automatically.
![Coolor's-Homepage](https://officeotter.org/wp-content/uploads/2018/10/Coolors-Homepage-Screenshot.png)

As a HTML & CSS beginner, we can also try to manually clone any website of our liking, with the precaution that we are cloning the website as a way to practice or build our portfolio (non-commercial use). <strong>It's extremely prohibited to use the clone-website for commercial purposes!</strong>

## Development Stages

<b>Important tool</b> that can and should be used during development: <strong>Browser Developer Tools</strong>.
To access Developer Tools, simply right-click on any webpage, and choose 'Inspect Element'
(img: Accessing Developer Tools)

Through Developer Tools, we are able to check and edit the html and css of the page we are inspecting. This way, we can easily modify CSS elements live (because the modifications get applied in real time.)
(img: Modifying a CSS element through Developer Tools)
 

### Official Website used : [CD Projekt Red](https://www.cdprojektred.com/en)
CD Projekt Red is a subsidiary of CD Projekt, best known as the game studio behind the 2015 Game of The Year "The Witcher 3 : The Wild Hunt", a game that is still known as one of the greatest open-world game of all times to this date.

The success of the third installment from "The Witcher" Series, easily catapulted CD Projekt Red's fame into a similar level of "Grand Theft Auto" franchise (by Rockstar Games, a subsidiary of Take Two) and the amassed massive fortune was able to jump-start new projects such as 'Gwent' (a turn-based card game that started out as a mini game in The Witcher 3: Wild Hunt), Cyberpunk 2077 (a role-playing open world game that was promoted as a massive upgrade from The Witcher 3: Wild Hunt, although their initial release brought upon several controversial issues, the game is currently gaining positive feedbacks by each updates), at least two upcoming "The Witcher" trilogy related games, an upcoming new trilogy for "The Witcher" series, an upcoming expansion for Cyberpunk 2077, and lastly, also an upcoming game, a sequel to Cyberpunk 2077.

### Part 1: Header & Main Banner
**Official CDPR's Header & Main Banner:**
![OfficialCDPR's-Header&Banner](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/CDPROfficialHeaderandBanner.webp)
<br>


For the header, the most prominent challenge was to change around the flex-direction, align-items, and justify-content on display: flex to fit each dimension (mobile, tablet, and laptop/desktop).

Another feature from header that I worked on was the hamburger menu that shows a drop-down menu. Although this feature is fully functional, the transition have yet to work properly. 

Due to the time constraint, I decided to leave the header to 90% identical and leave the 10% tweakings to later parts.

<b>Comparison images:</b>
<b>My Progress:</b>
![SherinOlivia's-Header](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/Part1RooHeader.webp)

For the Main Banner, there is a video playing in the background on a loop. I was able to easily get the video source, but tweaking the video position posed quite a challenge. Especially because I needed to also position the logo and text/intro over the video.

For section over the video, I used:
`display: flex`
`flex-direction: column`
`align-items: center`
I also applied the same modification to adjust the middle part of the section, which is an introductory phrase.

I worked on Header and Main Banner back-to-back, therefore the correct pictures have yet to load during the time the screenshot was taken (because I haven't push the progress to Github Repository)

<b>Comparison image:</b>
<b>My Progress:</b>
![SherinOlivia's-Main-Banner](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/Part1RooMainBanner.webp)

### Git Branch & Pull Request

To update the project's progress, I created new branch to push unto and used Pull Request feature through Github

1. Making and Switching to a new branch
- Making new branch: 
`git branch branch-name` 
i.e `git branch header-and-banner`
- Switching to new branch: 
`git checkout branch-name` 
i.e `git checkout header-and-banner`
OR
- Switch to new branch as we make it: 
`git checkout -b branch-name` 
i.e `git checkout -b header-and-banner`

2. Git push to branch
- Initial/first push (of the branch): 
`git push --set-upstream origin branch-name` 
i.e `git push --set-upstream origin header-and-banner`
- Second and onwards push (of the branch): `git push branch-name` 
i.e `git-push header-and-banner`

[Author's Note, for every new branch, we will have to use the `--set-upstream origin command`, because it sets the branch as the default target to push into.]

3. Pull Request

After pushing to the repository, we will be able to create a pull request and review the changes before merging the code.
- Create Pull Request through Github's Repository
![Pull-Request](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/PullRequest.webp)
- Edit the commit messages to fully explain the updates then click Merge Pull Request
![Pull-Request-Review](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/MergePullRequest.webp)
- Confirm the Merge
![Confirm-Merge](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/ConfirmMerge.webp)
- Pull Request succeeded. We can delete the branch if we want to and create a new branch for every update. If you are working in a team, this move is not advisable, but as an individual, this may help with tidying the commit logs (to prevent pushing different feature updates to unrelated branch name)
![Pull-Request-Succeeded](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/PullRequestSucceeded.webp)

### Part 2: Side Job-Offer-Link and Update on Part 1: Header & Main Banner
**CDPR's Header, Banner and Side-link**
![CDPR's-Header,Banner-&-Side-Job-Offer-Link](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/CDPROfficialSideJobOfferLink.webp)
- This is comparably a small update. I managed to create a small fixed menu on the side where there is a link to go to the Job Offer Page.
- I used a minus value right margin of the 'box' and decreases the minus value on hover. I also used transition to smooth the process.
`right: -29.8vw` to `right: 0`
- With the correct image showing, I was able to adjust the image sizes and positions on the page better. Currently closer to the real web, with the only major issue is the unobtainable font (the official website uses paid font)

<b>Comparison image:</b>
<b>My Progress:</b>
![SherinOlivia's-Side-Job-Offer-Link](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/Part2RooSideJobLink.webp)

### Part3: Main - Introduction Section
![CDPR's-introduction-part-of-main](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/CDPRIntroduction-and-GototopButton.webp)
For this particular section, there are 2 smaller banners with their respective subtitle and a pair of links that acts like buttons. Under each banner, there are also another subtitle and a paragraph.

Due to the differing layouts/positions for the elements, a div soup (using too many `<div></div>` tags for a specific part of the page) is almost impossible to avoid as a beginner.

Nevertheless,  I tried to work around with something like this instead:
 (img: snippet of introduction section in html file) / uses html codes straight away in markdown.

And this is the result :
![SherinOlivia's-introduction-part-of-main](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/Part3RooIntroduction-and-gototopbutton.webp)

On top of that, I also fixed the font problem (`@font-face` wasn't working properly) by finding another source file for the same font.

And lastly, I was able to add a button fixed to the bottom right corner, which will lead users back to the top of the page when clicked.