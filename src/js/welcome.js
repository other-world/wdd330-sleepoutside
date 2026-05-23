let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits == 0) {
    window.alert("Welcome to the page! Don't forget to register to be entered into our weekly drawing.");
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

