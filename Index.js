function next() {
    document.getElementById("wbutt").classList.add("hide");
    document.getElementById("dthema").classList.remove("hide");
    document.getElementById("hthema").classList.remove("hide");
    document.getElementById("spiel").classList.remove("hide");
}

function W1() {
    document.getElementById("F1").classList.add("none");
    document.getElementById("F2").classList.remove("none");
}

function W2() {
    document.getElementById("F2").classList.add("none");
    document.getElementById("F3").classList.remove("none");
}

function Z2() {
    document.getElementById("F1").classList.remove("none");
    document.getElementById("F2").classList.add("none");
}

function W3() {
    document.getElementById("F3").classList.add("none");
    document.getElementById("F4").classList.remove("none");
}

function Z3() {
    document.getElementById("F2").classList.remove("none");
    document.getElementById("F3").classList.add("none");
}

function W4() {
    document.getElementById("F4").classList.add("none");
    document.getElementById("F5").classList.remove("none");
}

function Z4() {
    document.getElementById("F3").classList.remove("none");
    document.getElementById("F4").classList.add("none");
}

function W5() {
    document.getElementById("F5").classList.add("none");
    document.getElementById("F6").classList.remove("none");
}

function Z5() {
    document.getElementById("F4").classList.remove("none");
    document.getElementById("F5").classList.add("none");
}

function Z6() {
    document.getElementById("F5").classList.remove("none");
    document.getElementById("F6").classList.add("none");
}

function Z0() {
    location.reload("document")
}

function Probieren() {
    document.getElementById("Z0").classList.remove("none")
    
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
    if (a3 === "Bavaria") {
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