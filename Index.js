function next() {
    document.getElementById("hthema").classList.remove("hide");
    document.getElementById("wbutt").classList.add("hide");
    document.getElementById("dthema").classList.remove("hide");
}

function Probiren() {
    let result = 0;

    let a1 = document.getElementById("f1").value;
    if (a1 === "Marienplatz") {
        result++;
    }

    let a2 = document.getElementById("f2").value;
    if (a2 === "Olympiaturm") {
        result++;
    }

    let a3 = document.getElementById("f3").value;
    if (a3 === "Statue der Bavaria") {
        result++;
    }

    let a4 = document.getElementById("f4").value;
    if (a4 === "Frauenkirche") {
        result++;
    }

    let a5 = document.getElementById("f5").value;
    if (a5 === "Englischer Garten") {
        result++;
    }

    let a6 = document.getElementById("f6").value;
    if (a6 === "Schloss Nymphenburg") {
        result++;
    }

    alert("Richtige Antworten..." + result);
}