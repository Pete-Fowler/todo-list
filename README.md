This project provided additional exerience using webpack and organizing code into
separate JS modules. I opted to separate code by tasks and projects, and to
subdivide those into data-related and DOM-related modules. I think in the future
I would add another module to store and give out data between other modules, 
since this seems like it would lead to objects being coupled more loosely.

Learning about using date objects, converting those to and from strings, and
comparing dates for the first time was challenging. I found that converting 
everything to UTC midnight fixed bugs apparently associated with time zone issues.

Closest does not find display none dropdown content. I worked around this by
using closest to find the task id, corresponding to task array index number, and
then using queryselector('${task} .dropdown-content').



Implement local storage

fix transition on load

remove crazy focus outline for new project & task buttons

