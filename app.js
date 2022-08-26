function allExpiringElements("exYear")
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
        let year = allExpiringElements[i].attributes["exYear"];
        let month = allExpiringElements[i].attributes["exMonth"] - 1;
        let day = allExpiringElements[i].attributes["exDay"];
        let hour = allExpiringElements[i].attributes["exHour"];
        let minute = allExpiringElements[i].attributes["exMin"];
        let expiryTime = new Date(year,month,day,hour, min);
        let now = new Date();
        if (now > expiryTime) {
            allExpiringElements[i].style.display = 'hidden';
        } //Does it work? I have no idea. 
    }
}

