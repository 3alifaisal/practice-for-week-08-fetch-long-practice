/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
fetch("./products", {
    method: "POST",
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})



/* ============================== Phase 2 ============================== */

// Your code here
fetch('/products', {
    method: 'POST',
    body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
    .then(res => {
        console.log(`response status code = ` + res.status);
        console.log(`reponse Content-type of header = ` + res.headers.get('Content-type'));
        console.log(`response URL = ` + res.url);
        console.log(`response .redirected = ` + res.redirected);
       
    });
// redirected is true, and URL is URL redirected.
// but status code is still 200, not 302




/* ============================== Phase 3 ============================== */

// Your code here
const formData = new URLSearchParams();
formData.append("name", "Caribbean Delight Coffee");
formData.append("description", "Made by Manatee Coffee");
formData.append("price", "11.99");
formData.append("categories", "grocery");

fetch("./products", {
    method: "POST",
    body: formData,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})