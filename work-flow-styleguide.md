**#Work-Flow Style Guide**
---
# Table of Contents
  * [Naming Conventions](#naming-conventions)
  * [HTML and CSS](#html-css)
  * [JavaScript](#javascript)
  * [JavaScript Structure](#javascript-structure)
  * [CSS Structure](#css-structure)
  * [HTML Structure](#html-structure)
  * [Git Guidelines](#git-guidelines)
  * [Group Conduct](#group-conduct)  



  **##Naming Conventions <a id="naming-conventions"></a>
  ---
  **#HTML and CSS <a id="html-css"></a>

    * We will utilize a single style.css for all of our HTML pages. As such we want to use as much of it as possible to keep the page appearance consistent and uniform.
    * All names will be written using kabob-case
    * If js will render element content, we will use: '<section id="js-identify-content">' (as an example of formatting).
    * CSS elements will be identified by class: '<search-result-container'> (as an example of formatting).
    * Class names such as style-bold will be used repeatedly so be mindful about your class names.


    **#JavaScript  <a id="javascript"></a>
---
    * All names will be written using camelCase.
    * Variable names need to clearly identify context: '<var whatVariableIs = 'item being represented'>'
    * Function Names need to explain what the function is doing: '<function thisFunctionGeneratesWidgets();>'
    * When/if renaming a function or variable becomes warranted provide documentation in Trello and Git Commit -m "Why I changed the name" and include the previous name for ease of transition with collaborators.
    * Our main constructor function will be named BuildGameItem and future instances and prototypes will follow this name structure.
    *Commenting:
      + As you are writing your code you should be commenting before each function to indicate how it will work and what data it will produce.
      + Commenting is also expected before new instance creation to describe the group of variables used.


**##JavaScript Structure  <a id="javascript-structure"></a>
---

      * 'use strict'; will appear at the top of each js document.
      * Our project will feature two Js files, one named storage.js (for data) and one called app.js (for html pages).
      * The script tags at the bottom of the page will be formatted like this: '<script src="scripts/app.js"></script>'
      * Global variables will be placed at the top of the page.
        + Followed by constructor functions.
          * Then instanciations.
        + Next are functions.
            * Function calls.
        + Lastly, eventListeners, unless needed inside of function scope.


**##CSS Structure <a id="css-structure"></a>
---
    * We will use -reset at the top of the CSS
    * Global styles will be utilized as much as possible to keep code dry.
      + Example = article will feature links of the same color.
      + Button styling will be the same on all pages.
    * Use page-specific comments as needed to designate sections of content which will only be used for that page's elements.
      + Be sure to align the CSS in order of element appearance on the HTML document.
    * Media-Query will be located at the bottom of the CSS document.


  **##HTML Structure <a id="html-structure"></a>
  ---
    * Refer to these images for page-specific content layout.
      + Sub-Page Global Layout on the left.
      + Main Home Page Layout on the right.
    * ![HTML-Mockup](http://i.picresize.com/images/2016/02/29/U6qe.png)   


    **##Git Guidelines <a id="git-guidelines"></a>
    ---

      * Branch naming will follow this kebob-style format:
        + Begin name with file type (CSS, HTML, JS, MD)-
        + Task # from Trello ticket assignment (Task1)-
        + Any relevant task description you wish to include.
      * Product should look like this ("html-task1-formatting-basic-page-layout").
      * A new branch should be created for each task assignment or item to be worked on.
      * Merging will be done only at designated "Merge party times".
      * No one is to merge their own pull requests.
      * Utilize the Trello boards to communicate pull requests awaiting review and update once merged to Master.
      * When completing a merge request (during the designated time) be sure to thoroughly review changes before completion.
      * Comment pull requests and close as appropriate to indicate the need for content revision.
      * Add, Commit, and Push often and don't forget to pull after a Merge Party.
      * Use Commit messages to document changes and work completed as well as notification of naming changes as described above.


      **##Group Conduct <a id="group-conduct"></a>
      ---

      * Be kind to your fellow project collaborators and notify the group in slack, by email, phone, or whatever means appropriate if you will miss class for any amount of time during project week.
      * Please refer to this styleguide to research your questions before asking fellow group members for assistance.
      * Please follow the above guidelines to keep your work-flow in line with the whole group, doing this will avoid merge conflicts and save valuable time handling bugs, etc.
      * Be open to and willing to provide constructive feedback.
      * Try to remain flexible with your mindset about the work involved in this project. We are all here to learn from each other and the class as a whole. 
