let allExpiringElements = document.querySelectorAll('[exY]')
function hideExpiredElements()
{
    for (let i = 0, n = allExpiringElements.length; i < n; i++)
    {
        let now = new Date();
        let year = now.getFullYear();
        year++;
        let month = 0;
        let day = 1;
        let hour = 0;
        let min = 0;
        year = allExpiringElements[i].attributes["exY"].value;
        month = allExpiringElements[i].attributes["exM"].value - 1;
        day = allExpiringElements[i].attributes["exD"].value;
        hour = allExpiringElements[i].attributes["exH"].value;
        min = allExpiringElements[i].attributes["exMin"].value;
        let expiryTime = new Date(year,month,day,hour, min);
        if (now > expiryTime) {
            allExpiringElements[i].style.display = 'none';
        } //Does it work? I have no idea. 
    }
}
hideExpiredElements();
setInterval(hideExpiredElements, 5000);