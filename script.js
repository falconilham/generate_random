// Fungsi untuk mengganti tab aktif
function changeTab(tabIndex) {
    const tabs = document.querySelectorAll(".nav-tabs .nav-item");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    tabs[tabIndex - 1].classList.add("active");
    tabContents[tabIndex - 1].classList.add("active");
}

// Fungsi untuk pindah ke tab berikutnya
function nextTab(tabIndex) {
    const activeTab = document.querySelector(".nav-tabs .nav-item.active");
    const nextTab = activeTab.nextElementSibling;
    const nextButton = document.getElementById(`nextButton${tabIndex}`);

    // Cek apakah action di tab sebelumnya sudah dilakukan
    if (activeTab.id === "tab1Link" && !isTab1ActionDone()) {
        alert("Action di Tab 1 belum dilakukan!");
        return;
    }

    if (nextTab && !nextTab.classList.contains("disabled-link")) {
        nextTab.firstElementChild.click();

        // Jika pindah ke Tab 3, nonaktifkan tombol Next
        if (nextTab.id === "tab3Link") {
            nextButton.setAttribute("disabled", true);
        }
    }
}

function isTab1ActionDone() {
    const inputNumber = document.getElementById("inputNumber").value;
    return inputNumber !== "";
}

// Fungsi untuk menghandle tombol Next pada Tab 1
function handleNextTab1() {
    const tab1Link = document.getElementById("tab1Link");
    const nextButton = document.getElementById("nextButton1");
    // Disable Tab 1
    tab1Link.classList.add("disabled-link");
    nextButton.setAttribute("disabled", true);
    // Move to Tab 2
    changeTab(2);
}

// Fungsi untuk memeriksa nilai input setiap kali diubah
function checkInputValue() {
    const inputNumber = document.getElementById("inputNumber");
    const nextButton = document.getElementById("nextButton1");

    if (inputNumber.value !== "") {
        // Enable Next button
        nextButton.removeAttribute("disabled");
    } else {
        // Disable Next button
        nextButton.setAttribute("disabled", true);
    }
}

// Menambahkan listener pada input field
const inputNumber = document.getElementById("inputNumber");
inputNumber.addEventListener("input", checkInputValue);

// Fungsi untuk menghasilkan angka acak dan menampilkannya dalam tabel
function generateRandomNumbers() {
    if (!isTab1ActionDone()) {
        alert("Action di Tab 1 belum dilakukan!");
        return;
    }

    const inputNumber = document.getElementById("inputNumber");
    const numberTableBody = document.querySelector("#numberTable tbody");
    const nextButton = document.getElementById("nextButton2");

    // Nonaktifkan tombol "Next" sebelum menghasilkan angka acak
    nextButton.disabled = true;

    numberTableBody.innerHTML = "";

    const numberCount = parseInt(inputNumber.value);
    const columnCount = 3; // Number of columns to display
    const rowCount = Math.ceil(numberCount / columnCount); // Calculate the number of rows needed

    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < columnCount; j++) {
            const cell = document.createElement("td");

            if ((i * columnCount + j) < numberCount) {
                const randomNumber = getRandomNumber(-1000000, 1000000);
                cell.textContent = randomNumber;
            }

            row.appendChild(cell);
        }

        numberTableBody.appendChild(row);
    }

    // Tampilkan tabel dan aktifkan tombol "Next" setelah menghasilkan angka acak
    numberTable.style.display = "block";
    nextButton.disabled = false;
}

// Fungsi untuk mendapatkan bilangan bulat acak dalam rentang tertentu
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk mendapatkan bilangan bulat positif terbesar dari tabel angka dan menampilkan bilangan B
function getMaxNumberAndShowB() {
    const numberCells = document.querySelectorAll("#numberTable tbody td");
    if (!isTab1ActionDone() || numberCells.length === 0) {
        alert("Action di Tab sebelumnya belum dilakukan!");
        return;
    }

    let maxNumber = -Infinity;
    numberCells.forEach((cell) => {
        const number = parseInt(cell.textContent);
        if (number > 0 && number > maxNumber) {
            maxNumber = number;
        }
    });

    document.getElementById("maxNumber").textContent = "Max Number: " + maxNumber;

    if (maxNumber > 1) {
        const bilanganB = maxNumber - 1;
        document.getElementById("bilanganB").textContent = "Integer B: " + bilanganB;
    } else {
        document.getElementById("bilanganB").textContent = "No integer B exists";
    }
}

// Fungsi untuk mendapatkan tanggal saat ini
function getCurrentDate() {
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return now.toLocaleDateString("en-US", options);
}

// Inisialisasi tanggal pengerjaan
document.getElementById("date").textContent = getCurrentDate();
