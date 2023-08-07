# Software Technologies Project

I really hope that we can get done with this project before the end of May, and build something that can impress recruiters,
So my teammates Chaimae, Dita, and Ussayed let's do it :)

## Project Development Process

### Sprint 1: Planning and Setup

- Set up project repository on GitHub
- Set up local development environments for team members
- Define project requirements and objectives: _This involves identifying what the project aims to achieve and what features and functionalities it should have._
- Determine project scope and limitations: _This task involves setting boundaries for the project, outlining what it will and will not include._
- Create a project timeline and milestones: \*This task involves creating a roadmap for the project, breaking down the work into smaller, manageable tasks and setting deadlines for each task, let's put in our mind that the deadline is the **_30th of May_**.\*

### Sprint 2: Design and Front-end Development

- Design the interface of the project: _This task involves designing the user interface and user experience before we go ahead and start implemnting it, like what we did in system engneenring, using this website `https://moqups.com/` or any other websites_
- Design and implement UI/UX using Angular and CSS: _This task involves designing the user interface and user experience using Angular and CSS. It includes creating and implementing a style guide, color schemes, typography, and other design elements._
- Implement responsive design for mobile devices: _This task involves designing and implementing the web application to be responsive, meaning it should adjust to different screen sizes and be optimized for use on mobile devices. (additionl feature)_
- These are the main tasks for now, then when we agree on a project idea there will be more tasks.

### Sprint 3: Back-end Development

- Design and implement database schema: _This involves designing and creating the database tables and relationships required to store the application data. like what we did in system engneenring, using this website `https://drawsql.app/` or any other websites_
- Implement user authentication and authorization: _This involves setting up the necessary authentication and authorization mechanisms to allow users to securely access and manage their accounts and information._
- These are the main tasks for now, then when we agree on a project idea there will be more tasks.

### Sprint 4: Testing

- Implement unit testing: _I do no have any idea on how to do this, but I remember the professer said he will teach as this, and we have to implement it_
- Fix and catch any errors or bugs.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Installation

Follow these steps to install and run this project on your local machine:

1. Navigate to your project worksapce directory: `cd xampp/htdocs`
2. Clone the repository to your local machine: `git clone https://github.com/190ibrahim/codeMavericks.git`
3. Navigate to the Front_end directory of the project: `cd codeMavericks/Front_end`
4. Install the necessary dependencies for angular: `npm install`
5. Test if it is working: `npm run start`
6. Navigate to the Back_end directory of the project: `cd codeMavericks/Back_end`
7. Install the necessary dependencies for angular: `composer install`
8. Test if it is working: `php artisan serve`

### Authors

- **Code Mavericks**

### Contributers:

- Ibrahim
- Chaimae
- Dita
- Ussayed

### License

This project is licensed under the MIT License - see the LICENSE file for details.
1) first check which branch you are working on: git branch
 you should be in the main
2) then: git pull 

3) then create a branch: git checkout -b <branchName>
NOw you can start working on this branch
After you did something, now staging and commiting
4) git add .
5) git commit -m ""


Now push so we can see what you have done.
6) git push -u origin <branchName>

Now we can see the work you did.
We will review it,you have to wait. if it is good, then make sure that in the same stage with the main, so
7) git checkout main
8) git pull
Now go back to your branch 
9) git checkout <branchName>
10) git rebase main
if there is a conflict solve it, then 11) git rebase --continue
11) git checkout main
12) git merge <branchName>
13) git push
to delete the branch
14) git branch -d <branchName> 
That's it
