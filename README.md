# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

A request is made to the server hosting techtonic.com to provide website data to be rendered and instructions on how to render it. Once the information is sent to your computer your web browser uses what modules and resources is can to render the webpage.

## From start to finish, how does data reach you to be rendered in the browser?

Your web browser sends a request to the local computers DNS cache to see if the ip address and route is stored within it. If it isn't there it then goes to the router, and from the router to an external DNS (if provided) until it is able to find the ip address and route. This happens on TCP port 443 for https.

## What code is rendered in the browser?

HTML, CSS and JavaScript are rendered in the browser

## What is the server-side code’s main function?

To transmit the content on how the page should be rendered properly and function in the clients web browser according to HTML, CSS, and JavaScript. The code also determines how the server interacts with databases on the backend and how queries made through the front end interface should be handled.

## What is the client-side code’s main function?

To execute the HTML, CSS, and JavaScript and present the layout of the website.

## What is runtime?

Runtime refers to code that is necessary to execute the features of whichever language you're using.
Source: https://stackoverflow.com/questions/3900549/what-is-runtime

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I know that for each web page you have a certain number of elements that can be cached to reference for future use and speeding up website page load times. I would assume that 1 instance would be created each time for each new page that was visited and then that those instances are referenced again rather than recreated again to reload the page.

## How many instances of the server-side code are available at any given time?

My assumption is that this has to do with version control and so there would only be 1 live version available for people to access, while there might be multiple versions that haven't yet entered production yet or have been taken off of production.

## How many instances of the databases connected to the server application are created?

I would assume there would be as few instances as possible, down to 1, as that would merely be duplicating data that could be accessed through a symbolic link rather than having to access and cache the whole database all over again.
