async function fetchData(url)
{
    let promise = await fetch(url);
    let data = await promise.json();

    return data;
}
async function loadBid(id)
{
     let budUrl = await fetchData('http://nackowskis.azurewebsites.net/api/Bud/800/'+ id);

     let bud = document.getElementById("").value //value från input
     let storstBud = 0;

for ( i = 0; i <budUrl.length; i++)
{
    function createBid() {
        fetch("https://nackowskis.azurewebsites.net/api/bud/800/", {
          method: "POST",
          headers: {
            "Accept": "application/json, text/plain, /",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
                  BudID: 53,
                  Summa: 11111111111,
                  AuktionID: 1
              })
        }).then(res => res.json()).then(res => console.log(res));
    }
