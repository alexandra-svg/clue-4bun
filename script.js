const codPINCorect = "007Beams"; // Setează codul PIN dorit

function verificaPIN() {
    const inputPIN = document.getElementById("pinInput").value;
    const rezultatDiv = document.getElementById("rezultat");

    if (inputPIN === codPINCorect) {
        rezultatDiv.innerHTML = "<h2>Cod PIN corect!</h2><img src='imagine.jpg' alt='Imagine cadou'><p></p>";
    } else {
        rezultatDiv.innerHTML = "<p>Cod PIN incorect. Te rog încearcă din nou.</p>";
    }
}
