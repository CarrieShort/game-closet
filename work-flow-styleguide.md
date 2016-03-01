# **Work-Flow Style Guide**
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
---


# **Naming Conventions <a id="naming-conventions"></a>**
  ---
## **HTML and CSS <a id="html-css"></a>**

    1. We will utilize a single style.css for all of our HTML pages. As such we want to use as much of it as possible to keep the page appearance consistent and uniform.

    2. All names will be written using kabob-case.

    3. If js will render element content, we will use: <section id="js-identify-content"> (as an example of formatting).

    4. CSS elements will be identified by class: '<search-result-container>' (as an example of formatting).

    5. Class names such as style-bold will be used repeatedly so be mindful about your class names.


#  **JavaScript  <a id="javascript"></a>**
---

    1. All names will be written using camelCase.

    2. Variable names need to clearly identify context: <var whatVariableIs = 'item being represented'>.

    3. Function Names need to explain what the function is doing: <function thisFunctionGeneratesWidgets();>.

    4. When/if renaming a function or variable becomes warranted provide documentation in Trello and Git Commit -m "Why I changed the name" and include the previous name for ease of transition with collaborators.

    5. Our main constructor function will be named BuildGameItem and future instances and prototypes will follow this name structure.

    Commenting:

      1. As you are writing your code you should be commenting before each function to indicate how it will work and what data it will produce.

      2. Commenting is also expected before new instance creation to describe the group of variables used.


##  **JavaScript Structure  <a id="javascript-structure"></a>**
---

         'use strict'; will appear at the top of each js document.

      1. Our project will feature two Js files, one named storage.js (for data) and one called app.js (for html pages).

      2. The script tags at the bottom of the page will be formatted like this: <script src="scripts/app.js"></script>.

      3. Global variables will be placed at the top of the page.
        a. Followed by constructor functions.
          b. Then instanciations.
            c. Next are functions.
              d. Function calls.
                e. Lastly, eventListeners, unless needed inside of function scope.


##  **CSS Structure <a id="css-structure"></a>**
---
     We will use -reset at the top of the CSS

    1. Global styles will be utilized as much as possible to keep code dry.
      a. Example = article will feature links of the same color.
      b. Button styling will be the same on all pages.

    2. Use page-specific comments as needed to designate sections ofcontent which will only be used for that page's elements.

    3. Be sure to align the CSS in order of element appearance on the HTML document.

    4. Media-Query will be located at the bottom of the CSS document.


## **HTML Structure <a id="html-structure"></a>**
  ---
      Refer to these images for page-specific content layout.

      1. Sub-Page Global Layout on the left.
      2. Main Home Page Layout on the right.
...
    ![HTML-Mockup](http://i.picresize.com/images/2016/02/29/U6qe.png)   
...

##  **Git Guidelines <a id="git-guidelines"></a>**


      1. Branch naming will follow kebob-style format:
        a. Begin name with file type (CSS, HTML, JS, MD)-
        b. Task # from Trello ticket assignment (Task1)-
        c. Any relevant task description you wish to include.
        d. Product should look like this ("html-task1-formatting-basic-page-layout").

      2. A new branch should be created for each task assignment or item to be worked on.

      3. Merging will be done only at designated "Merge party times".

      4. No one is to merge their own pull requests.

      5. Utilize the Trello boards to communicate pull requests awaiting review and update once merged to Master.

      6. When completing a merge request (during the designated time) be sure to thoroughly review changes before completion.

      7. Comment on pull requests and close requests as appropriate to indicate the need for content revision.

      8. Add, Commit, and Push often and don't forget to pull after a Merge Party.

      9. Use Commit messages to document changes and work completed as well as notification of naming changes as described above.


##    **Group Conduct <a id="group-conduct"></a>**


      1. Be kind to your fellow project collaborators and notify the group in slack, by email, phone, or whatever means appropriate if you will miss class for any amount of time during project week.

      2. Please refer to this styleguide to research your questions before asking fellow group members for assistance.

      3. Please follow the above guidelines to keep your work-flow in line with the whole group, doing this will avoid merge conflicts and save valuable time handling bugs, etc.

      4. Be open to receiving, and willing to provide constructive feedback.

      5. Try to remain flexible with your mindset about the work involved in this project. We are all here to learn from each other and the class as a whole.
