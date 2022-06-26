Learning about using date objects, converting to and from strings, and
comparing dates for the first time was challenging. I found that converting 
everything to UTC midnight fixed bugs apparently associated with time zone issues.

Tasks

task project property is changed by dropdown
    Style dropdown or add indicator to show which project it is assigned to

Projects


fix transition on load

Implement different task views by date and project

Implement local storage



<!-- 
Currently have just one render function displaying all tasks and the 
dropdown menu.

Need to implement different ways of displaying the task list for All, starred, 
today, this week, and for each project

Add click event handlers to each of the above
    when clicked, use currentview function to return a sub array of tasks
    matching that view 



 -->