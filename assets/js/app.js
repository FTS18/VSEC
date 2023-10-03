function toggleMenu() {
  var menu = document.querySelector('.menu-list');
  menu.classList.toggle('active');
}

fetch('../data.json')
  .then(response => response.json())
  .then(pdfData => {
    const classDropdown = document.getElementById("classDropdown");
    const categoryDiv = document.getElementById("categoryDiv");
    const categoryDropdown = document.getElementById("categoryDropdown");
    const monthDiv = document.getElementById("monthDiv");
    const monthDropdown = document.getElementById("monthDropdown");
    const pdfViewer = document.getElementById("pdfViewer");

    function showCategoryOptions() {
      categoryDiv.style.display = "block";
      categoryDropdown.disabled = false;
    }

    function hideCategoryOptions() {
      categoryDiv.style.display = "none";
      monthDiv.style.display = "none";
      categoryDropdown.disabled = true;
      monthDropdown.disabled = true;
    }

    classDropdown.addEventListener("change", function () {
      const selectedClass = classDropdown.value;
      if (selectedClass) {
        showCategoryOptions();
        populateCategories(selectedClass);
      } else {
        hideCategoryOptions();
      }
    });

    function populateCategories(selectedClass) {
      categoryDropdown.innerHTML = '<option value="">Select Category</option>';
      const categories = Object.keys(pdfData[selectedClass]);

      categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryDropdown.appendChild(option);
      });
    }

    categoryDropdown.addEventListener("change", function () {
      const selectedCategory = categoryDropdown.value;
      if (selectedCategory) {
        monthDiv.style.display = "block";
        monthDropdown.disabled = false;
        populateMonths(classDropdown.value, selectedCategory);
      } else {
        monthDiv.style.display = "none";
        monthDropdown.disabled = true;
      }
    });

    function populateMonths(selectedClass, selectedCategory) {
      const monthsData = pdfData[selectedClass][selectedCategory];
      monthDropdown.innerHTML = '<option value="">Select Month</option>';

      monthsData.forEach(month => {
        const option = document.createElement("option");
        option.value = month.url;
        option.textContent = month.name;
        monthDropdown.appendChild(option);
      });
    }

    const downloadLink = document.getElementById("downloadLink");
    const printButton = document.getElementById("printButton");

    printButton.addEventListener("click", function () {
      const selectedMonth = monthDropdown.value;
      if (selectedMonth) {
        const pdfWindow = window.open(selectedMonth);
        pdfWindow.print();
      }
    });monthDropdown.addEventListener("change", function () {
      const selectedMonth = monthDropdown.value;
      if (selectedMonth) {
        pdfViewer.innerHTML = "";
    
        // Create a download link
        const pdfLink = document.createElement("a");
        pdfLink.className = "pdf-link";
        pdfLink.href = selectedMonth;
        pdfLink.target = "_blank";
        pdfLink.textContent = "Download";
    
        // Create a print button
        const printButton = document.createElement("a");
        printButton.className = "pdf-link";
        printButton.textContent = "Print";
        printButton.addEventListener("click", function () {
          // Open the selected PDF in a new tab for printing
          window.open(selectedMonth, "_blank");
        });
    
        // Append both download and print options
        pdfViewer.appendChild(pdfLink);
        pdfViewer.appendChild(printButton);
      } else {
        pdfViewer.innerHTML = "";
      }
    });    
  })
  .catch(error => console.error(error));

document.addEventListener("DOMContentLoaded", function () {
  const sidebarContainer = document.querySelector(".sidebar");
  fetch("../assets/components/sidebar.html")
    .then(response => response.text())
    .then(content => {
      sidebarContainer.innerHTML = content;
    })
    .catch(error => {
      console.error("Error fetching sidebar content:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.querySelector("header .nav-container");
  fetch("../assets/components/navbar.html")
    .then(response => response.text())
    .then(content => {
      headerContainer.insertAdjacentHTML("beforeend", content);
    })
    .catch(error => {
      console.error("Error fetching navbar content:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.getElementById("image-container");
  fetch("gallery.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const imgElement = document.createElement("img");
        imgElement.src = item.src;
        imgElement.alt = item.alt;
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.appendChild(imgElement);
        imageContainer.appendChild(itemDiv);
      });
    })
    .catch(error => {
      console.error("Error fetching gallery data:", error);
    });
});

const currentYear = new Date().getFullYear();
const footer = document.getElementById('copyright');
footer.textContent = `Copyright © ${currentYear}, Ananay Dubey`;
document.addEventListener("DOMContentLoaded", function () {

  gsap.to(".barr", 1.2, {
    delay: 0.5,
    height: 0,
    stagger: {
      amount: 0.4,
    }, ease: "power1.inOut",
  })
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
    const currentTheme = body.classList.contains("dark-theme") ? "Light" : "Dark";
    themeToggle.textContent = currentTheme;
  }); 
});
