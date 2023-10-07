
fetch('../../data.json')
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
