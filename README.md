# Simple content expiry
 A simple tool to hide content which is expired.
 
 But beware: The content is only hidden on the client side via CSS and can still be found in the source code.

To add the functionality, add the script to your page. Make sure that the script is only active after the page has loaded!

# Define content as content to expire
To give content an expiration date we use custom attributes for HTML elements in this solution.

For each year, month, day, hour and minute we have a custom attribute that we can customize.

The custom attributes are as follows:

Year: exY (required)  
Month: exM  
Day: exD  
Hour: exH  
Minute: exMin  

Without the value for the year, the element is not recognized as an element that can expire.

The default values for the custom attributes are:

Month: January  
Day: 1  
Hour: 0  
Minute: 0

For the overview, all values can always be set individually. Except for the year, however, only the values that differ from the default values can be set.

# Example
Just add your needed custom attributesto the element like this:

~~~
<div exyear="2022" exmonth="11" exday="11" exhour="11" exmin="11" class="content"></div>
~~~

This element expires on November 11th 2022 at 11:11. After this time the element will not be visible. 

Beware: Every 5 seconds, the script checks if the time has come to hide elements. So it could be that HTML elements are hidden up to 5 seconds too late.
