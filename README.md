<a href='https://pete-fowler.github.io/todo-list/'>Live page</a>

This is a basic todo list, allowing a user to create tasks, add a description,
mark them starred, add a due date, and create projects tasks can be assigned to. 
Tasks can be viewed all at once, due today, due this week, starred, or by project.
The site uses localStorage so that the tasks and projects remain after refreshing
or closing the browser window.  

This project provided additional exerience using webpack and organizing code into
separate JS modules. I opted to separate code by tasks and projects, and to
subdivide those into data-related and DOM-related modules. I think in the future
I would add another module to store and publish data between other modules, such
as the variables currentArray, currentView, tasks, and projects. This seems like
it would lead to objects being coupled more loosely.

Learning about using date objects, converting those to and from strings, and
comparing dates for the first time was challenging. I found that converting
everything to UTC midnight fixed bugs apparently associated with time zone
issues.

I also learned with the dropdown menu that closest does not find an element set
to display: none. I worked around this by using closest to find the task id,
corresponding to task array index number, and then using queryselector('${task}
.dropdown-content'). Another option, although not tested, may have been to use
display: hidden instead of display: none.
