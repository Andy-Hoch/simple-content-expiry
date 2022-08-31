/*function allExpiringElements()
{
  let matchingElements = [];
  let allElements = document.getElementsByTagName('*');
  for (let i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}

function hideExpiredElements()
{
    for (let i = 0, n = allExpiringElements.length; i < n; i++)
    {
        let now = new Date();
        let year = now.getFullYear;
        let month;
        let day;
        let hour = 0;
        let minute = 0;
        year = allExpiringElements[i].attributes["exYear"];
        month = allExpiringElements[i].attributes["exMonth"] - 1;
        day = allExpiringElements[i].attributes["exDay"];
        hour = allExpiringElements[i].attributes["exHour"];
        minute = allExpiringElements[i].attributes["exMin"];
        let expiryTime = new Date(year,month,day,hour,min);
        
        if (now > expiryTime) {
            allExpiringElements[i].style.display = 'none';
        } //Does it work? I have no idea. 
    }
}*/

/*function allExpiringElements(attribute)
{
  let matchingElements = [];
  let allElements = document.querySelectorAll('[exYear]');
  for (let i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  console.log(allElements);
  return matchingElements;
}*/

let allExpiringElements = document.querySelectorAll('[exYear]')
function hideExpiredElements()
{
    for (let i = 0, n = allExpiringElements.length; i < n; i++)
    {
        let now = new Date();
        let year = now.getFullYear;
        let month;
        let day;
        let hour = 0;
        let min = 0;
        year = allExpiringElements[i].attributes["exYear"].value;
        month = allExpiringElements[i].attributes["exMonth"].value - 1;
        day = allExpiringElements[i].attributes["exDay"].value;
        hour = allExpiringElements[i].attributes["exHour"].value;
        min = allExpiringElements[i].attributes["exMin"].value;
        let expiryTime = new Date(year,month,day,hour, min);
        if (now > expiryTime) {
            allExpiringElements[i].style.display = 'none';
        } //Does it work? I have no idea. 
    }
}
hideExpiredElements();
setInterval(hideExpiredElements, 5000);