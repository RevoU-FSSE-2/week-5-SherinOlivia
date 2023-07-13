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
<b>Terminal</b>
: a program that we use to type in commands for the system to follow. In a simpler term, it's the tool that we use to communicate with our device to have them do whatever we need them to do. 

Each operating system has their own built-in terminal with differing commands, which can be easily solved by installing **Git Bash** on Windows, an application that basically allows Windows users to use Linux commands.

[Author's Note: [Check this link out](https://www.geeksforgeeks.org/linux-vs-windows-commands/) for a comprehensive comparison between linux and windows commands.]

**Visual Studio Code**
: usually referred to as VS Code, is a free and powerful source-code editor made by Windows that can be used by all Windows, Linux, and macOS users. 

This is where we will build our projects and other things such as debugging and version controlling. 


**Github**
:  a widely-used platform that provides services in software development. Through Github, we can also collaborate with our team on any project.

Github repository contains all of our project's files and their respective revision history. This means, any changes or updates from the very beginning to the latest state of the project can be checked and reviewed.

An empty repository only has an empty `readme.md` file in it. Once we start on a project, it's a commonly advised practice to create branches, either for each individual to use or for each task to be worked on.

### Accepted the assignment, what's next?
The first and foremost thing to do after accepting a task is to clone the Github repository to our device's local storage. This  is where Terminal's role comes in.


1. First, copy the repository link.
![Copying-Repository-Link](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/Copyingrepolink.webp)


2. Then, open the terminal of your choice. 
Be especially aware that `git clone` will directly clone the repository into the directory you're currently in (i.e if your position is currently in desktop, your repository folder will be cloned to desktop.) 
To prevent cloning into the wrong directory, use this command to check: `cd`
- You may also use `cd` to change directory, i.e `cd e:`
- Once you're in the right directory, proceed to clone the repository::
 `git clone (insert the copied repository link)` 
i.e `git clone https://github.com/RevoU-FSSE-2/week-5-SherinOlivia.git`

3. Next, using the same terminal, we can go ahead and move into the repository folder to create the needed files or folders for the development process
- to create new folder, use `mkdir folder-name` i.e `mkdir assets`
- to create new file, use `touch file-name` i.e `touch index.html`, `touch style.css`, `touch responsive.css`

4. Once set, use `code .` to open the project in VS Code. 

### Dive straight into VS Code? Really?

![Benjamin-Franklin-Quote?](https://quotefancy.com/media/wallpaper/1600x900/3006-Benjamin-Franklin-Quote-By-failing-to-prepare-you-are-preparing-to.jpg)

To prepare for all kinds of projects, we need **ideas.**

Ideas can be obtained by browsing the internet, talking and discussing with your teammates or friends, or even consulting with your team leader. **Make sure that the ideas that you come up with or agreed upon by the team  fit with the whole picture of the project**. We do not bump into Barbie in Skyrim, now do we?

**Useful tools that we can use during brainstorming/planning**
- [**Figma**](https://www.figma.com/), a free collaborative interface design tool that helps us design anything such as logos, applications, websites, etc.
![Figma's-Homepage](https://miro.medium.com/v2/resize:fit:4488/1*VyzNojpL-s1tEd3_cHECzw.png)

- [**Coolors**](https://coolors.co/), a free website where we are able to create our own color palette, or browse through the thousands of color palettes available. We are also able to upload any image to the site to extract the color palette automatically.
![Coolor's-Homepage](https://officeotter.org/wp-content/uploads/2018/10/Coolors-Homepage-Screenshot.png)

As a HTML & CSS beginner, we can also try to manually clone any website of our liking, with the precaution that we are cloning the website as a way to practice or build our portfolio (non-commercial use). <strong>It's extremely prohibited to use the clone-website for commercial purposes!</strong>

## Development Stages

<b>Important tool</b> that can and should be used during development: <strong>Browser Developer Tools</strong>.
To access Developer Tools, simply **right-click on any webpage**, and choose '**Inspect**'
(img: Accessing Developer Tools)
![Accessing-DevTools](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/main/assets/MDimgs/AccessingDevTools.webp)

Through Developer Tools, we are able to check and edit the html and css of the page we are inspecting. This way, we can easily modify CSS elements live (because the modifications get applied in real time.)
(img: Modifying a CSS element through Developer Tools)
 ![Modifying-CSS-Through-DevTools](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/main/assets/MDimgs/ModifyingCSSthroughDevTools.webp)

### Official Website used : [CD Projekt Red](https://www.cdprojektred.com/en)
CD Projekt Red is a subsidiary of CD Projekt, best known as the game studio behind the 2015 Game of The Year "The Witcher 3 : The Wild Hunt", a game that is still known as one of the greatest open-world game of all times to this date.


### Part 1: Header & Main Banner
**Official CDPR's Header & Main Banner:**
![OfficialCDPR's-Header&Banner](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/CDPROfficialHeaderandBanner.webp)
<br>


**Header's distinctive points:**
1. different position/location of the logo, hamburger button, social media navigation row
2. functional hamburger button (added in next update)
3. a side fixed button that leads to another page.

Due to the time constraint at the time of writing, I decided to leave the header to 90% identical and leave the 10% tweakings to later parts.

<b>Progress:</b>
![SherinOlivia's-Header](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/Part1RooHeader.webp)

**Main Banner's distinctive points:**
1. A trailer video playing in the background on a loop.
2. CDPR logo & Intro/Phrase over the video
3. a button that leads to the next part of the page


[Author's Note: worked on Header and Main Banner back-to-back, therefore the correct pictures have yet to load during the time the screenshot was taken (because I haven't push the progress to Github Repository)]

<b>Comparison image:</b><br>
<b>My Progress:</b>
![SherinOlivia's-Main-Banner](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/Part1RooMainBanner.webp)

### Git Branch & Pull Request

To update the project's progress, I created a new branch to push unto and used Pull Request feature through Github

1. **Making and Switching to a new branch**
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

2. **Git push to branch**
- Initial/first push (of the branch): 
`git push --set-upstream origin branch-name` 
i.e `git push --set-upstream origin header-and-banner`
- Second and onwards push (of the branch): `git push` 

[Author's Note, for every new branch, we will have to use the `--set-upstream origin command`, because it sets the branch as the default target to push into.]

3. **Pull Request**

After pushing, head to the repository to open a pull request and review the changes before merging the code.
- Create Pull Request through Github's Repository
![Pull-Request](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/PullRequest.webp)
- Edit the commit messages to fully explain the updates then click Merge Pull Request
![Pull-Request-Review](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/MergePullRequest.webp)
- Confirm the Merge
![Confirm-Merge](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/ConfirmMerge.webp)
- Pull Request succeeded. We can delete the branch if we want to and create a new branch for every update. If you are working in a team, this move is not advisable, but as an individual, this may help with tidying the commit logs (to prevent pushing different feature updates to unrelated branch name)
![Pull-Request-Succeeded](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/PullRequestSucceeded.webp)

### Part 2: Header - Side Fixed-Menu & Update on Part 1
**Official CDPR's Header, Banner and Side-link**
![CDPR's-Header,Banner-&-Side-Job-Offer-Link](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/CDPROfficialSideJobOfferLink.webp)
A comparably small update for header:

- A fixed side button-like menu that shows the link to another page (jobs offer/recruitment page) when hovered.
- Adjusted the image sizes and positions on header and main banner (the section with the video). 

A *major* issue persists: unobtainable paid-font, *partly solved* by using another font that bears some resemblance.

<b>Progress:</b>
![SherinOlivia's-Side-Job-Offer-Link](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/Part2RooSideJobLink.webp)

### Part3: Main - Introduction Section
**Official CDPR's Introduction Section**
![CDPR's-introduction-part-of-main](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/CDPRIntroduction-and-GototopButton.webp)

**Introduction Section's distinctive points:**
1. 2 sections with same layout : image, title, subtitle, button links, and paragraphs
2. different colour text for half of the subtitles

The official website included the image and all the separate texts/phrases inside multiple `<div></div` and relied heavily on `position: absolute` to customize the css. 

Instead, I called the image through `background-image: url()` and included `background-color` & `background-blend-mode` to purely alter the background itself (and not the multiple `<div></div>`tags)

**And this is the result :**
![SherinOlivia's-introduction-part-of-main](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/documentation/assets/MDimgs/Part3RooIntroduction-and-gototopbutton.webp)


[Author's Note: included a button fixed to the bottom right corner, which will lead users back to the top of the page when clicked.] 

### Part4: Main - Jobsletter Form & Footer - Content
**Official CDPR's Jobsletter Form**
![CDPR's-jobsletter-form-&-StudioLocation](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/main/assets/MDimgs/CDPRJobsletterStudio.webp)

**Jobsletter's distinctive points:**
1. An Input form for email
2. A short underline under the form title & caption
3. A slightly-out-of-page logo on the right side of the form

[Author's Note: the short underline was created using `::after` in css and the logo was set to `position: absolute` to `div` parent tag set with `position:relative` & `div` 'grandparent tag' with `overflow-x: hidden`]

**Footer - Content's distinctive points:**
1. Images that show the studio's locations 
2. A short underline under the title & caption
3. Studio's addresses and cities over the images (with altered brightness for the images)

[Author's Note: Again, I called the images through `background-image: url()` and used `::after` on the tag with the title & caption to create the 'underline']

**Progress:**
![SherinOlivia's-Jobsletter-form-&-StudioLocation](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/main/assets/MDimgs/RooJobsletterStudiolocation.webp)


### Part6: Deployment


**Netlify**
: a web hosting infrastructure and automation technology company


**Cloudfare**
: a company that provides content delivery network services, cloud cybersecurity, DDoS mitigation, and ICANN-accredited domain registration services. 


For the deployment process, we will be using Netlify to host our website and Cloudfare to manage the domain because of the SSL/TLS protection provided for free by Cloudfare.

In the previous project, we've configured some settings in Cloudfare, therefore, we only need to link our custom domain to the new deployed site on Netlify.

#### Comprehensive coverage of Purchasing a Custom Domain, Configuring Cloudfare settings, and linking custom domain to netlify-deployed site

##### Purchasing Custom Domain

To purchase a custom domain, we either need a :

- internationally accepted credit card for international domain registrar

or

- m-banking / qris / e-wallet / physical-visit to any partner convenience store for domestic domain registrar.

In this particular tutorial, we are opting for domestic domain registrar, 'Niagahoster'.

Niagahoster 
: an Indonesian hosting website that provides hosting services for both personal and business needs.

1. First, go to [**Niagahoster.co.id**](www.niagahoster.co.id)
2. Sign up or login through Facebook or Google account.
![Niagahoster-SignUp-or-Login](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/niagahosterloginorsignup.webp)

3. Check the availability of any domain name of your liking.
![Niagahoster-Domainchecking](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/checkdomainname.webp)

4. Purchase the custom domain and pay using your preferred payment method.
![Niagahoster-DomainPurchase](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/niagahosterpaymentmethod.webp)

5. Wait for the transaction to finish

##### DNS Configuration

Before we deploy the website through Netlify, we will have to configure some settings in Cloudfare. 

To do that,
1. First, we go to [**cloudfare.com**](https://www.cloudflare.com/)

2. Sign up with your email and verify the account through your email
![Cloudfare-SignUp](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/loginorsignupcloudfare.webp)

3. On the home page, click 'Add a Site' and enter your 'Custom Domain
![Cloudfare-AddSite](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/cloudfareaddsite.webp)

4. Click 'Add Site' to confirm
![Cloudfare-AddSiteConfirm](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/addsiteconfirmationcloudfare.webp)

5. From the subscription plans shown, choose Free Plan option
![Cloudfare-Freeplan](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/cloudfarefreeplan.webp)

6. Copy the Nameserver shown (We will use them to change the Nameserver in Niagahoster)
![Cloudfare-Nameserver](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/cloudfarenameserver.webp)

7. Go back to [**Niagahoster.co.id**](www.niagahoster.co.id) and click on your Custom Domain

8. On the Nameserver setting (or in 'Overview Domain'), click change nameserver and paste both nameservers from Cloudfare.
![Niagahoster-NameserverChange](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/verifyemailandchangenameserver.webp)

9. Wait for Cloudfare to verify this process, you will get an email from Cloudfare when your custom domain is successfully activated on Cloudfare's free plan.
![Cloudfare-ActiveDomainEmailNotif](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/cloudfareemail.webp)

##### Web Deployment

Now that our custom domain is active, we can go ahead and deploy our website through Netlify.

1. Go to [**app.netlify.com**](https://app.netlify.com/).
2. Sign up using your preferred account or email, but in this tutorial, We will be using 'Sign Up with Github' method.
3. Fill out the short survey and set your team's name
4. Click 'Add new site' and choose 'Import an existing project'
![Netlify-AddNewSite](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/netlifyimportproject.webp)

5. Choose 'Deploy with Github', on your first time, you will be directed to login to your Github account to authorize the connection
![Netlify-DeploywithGithub](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/deploywithgithub.webp)

6. Look for the repository of your website. 
![Netlify-ChooseRepo](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/chooserepotodeploy.webp)

7. Scroll down and click on 'Deploy (repository name)'
![Netlify-DeployRepoConfirm](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/deploysite.webp)

8. Wait for your website to get deployed (Usually almost instantly)
9. When your website is successfully deployed, you will get a randomly named website with 'netlify.app' subdomain. 
![Netlify-DeployedSiteRandomName](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/netlifyrandomnamesite.webp)

10. Click 'Site configuration' -> 'Change site name' to change the website's name.
![Netlify-DeployedSiteChangeName](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/changesitenamenetlify.webp)



**We're 75% there!** 
<p>Now we need to configure the setting so our custom domain will link to our deployed website.<p>

11. Now, click on 'Domain settings' -> 'Add a domain'. 
![Netlify-DomainSetting](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/addcustomdomainnetlify.webp)

12. Insert your custom domain and click on 'verify'
![Netlify-TypeCustomDomainIn](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/addcustomdomain_2_.webp)

![Netlify-AddCustomDomainIn](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/addcustomdomain_3_.webp)

13. Next, go back to [**cloudfare.com**](https://www.cloudflare.com/) and click on your custom domain.

14. Click on 'DNS' setting on the left side-bar or under Quick Action on the right side.
![Cloudfare-DNSSetting](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/wheretofinddnssetting.webp)

15. Click on 'Add record', and insert these:
- `Type: CNAME, Name: www, Content: (your custom domain i.e roozone.site)`
- `Type: CNAME, Name: (your custom domain i.e roozone.site), Content: (your netlify website link i.e roozonev2.netlify.app)`

![Cloudfare-DNSRecordManagement](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/dnsrecordmanagement.webp)

<p align="center"><strong>Custom Domain Succesfully linked!!</strong><p>

![Roozone-SuccesfulCustomDomain](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/successfulcustomdomain.webp)

##### Changing Deployed Site to Reuse Custom Domain

To reuse our custom domain, simply head back to [**app.netlify.com**](https://app.netlify.com/) 

- Click on our deployed site with the custom domain
![Roozone-SitewithCustomDomain](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/main/assets/MDimgs/ChooseDeployedSite.webp)
- Proceed to remove custom domain
![Roozone-RemoveCustomDomain](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/main/assets/MDimgs/NetlifyRemoveCustomDomain.webp.webp)
- Change to new deployed site that we want to link and readd custom domain
![Roozone-ReaddCustomDomain](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/main/assets/MDimgs/AddCustomDomain1.webp)
![Roozone-ReaddCustomDomainVerify](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/main/assets/MDimgs/AddCustomDomain2.webp)

- Now, go back to [**cloudfare.com**](https://www.cloudflare.com/)
- Click on 'DNS' setting on the left side-bar or under Quick Action on the right side.
![Cloudfare-DNSSetting](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/main/assets/documentation/wheretofinddnssetting.webp)
- Edit the previously added DNS Record by replacing the previous deployed site with the new one
![Cloudfare-DNSRecordEdit](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/main/assets/MDimgs/AddNetlifyLinktoCustomSiteDNSRecords.webp)

<p align="center"><strong>Voila!</strong><p>

![Roozone-SuccesfulRelink](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/main/assets/MDimgs/CustomDomainSuccessfullyLinked.webp)

### Contact Me:

![Roo-Gmail1](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/ec070b5a2e4e0ad121706596ada521e0e856af7b/assets/icons/email.svg)  [SOChronicle@gmail.com](mailto:SOChronicle@gmail.com) [Personal]

![Roo-Gmail2](https://raw.githubusercontent.com/RevoU-FSSE-2/week-4-SherinOlivia/ec070b5a2e4e0ad121706596ada521e0e856af7b/assets/icons/email.svg)  [SOlivia@gmail.com](mailto:SOlivia198@gmail.com@gmail.com) [Work]

[![Roo-Discord]()](https://discord.com/users/shxdxr#7539)
[![Roo-Instagram]()](https://instagram.com/shxdxr?igshid=MzRlODBiNWFlZA==)
[![Roo-LinkedIn]()](https://www.linkedin.com/in/sherin-olivia-07311127a/)


