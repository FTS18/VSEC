
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

    monthDropdown.addEventListener("change", function () {
      const selectedMonth = monthDropdown.value;
      if (selectedMonth) {
        pdfViewer.innerHTML = "";
        const pdfLink = document.createElement("a");
        pdfLink.className = "pdf-link";
        pdfLink.href = selectedMonth;
        pdfLink.target = "_blank";
        pdfLink.textContent = "Download";
        pdfLink.classList.remove("disabled")
        pdfViewer.appendChild(pdfLink);
      } else {
        pdfViewer.innerHTML = "";
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));
  //Slide Up on Page Load
  slideTimer = setInterval(function() {
      $('.loading-screen').slideUp();
      $('body').removeClass('disabledScroll');
  }, 1550); //3500
  
const currentYear = new Date().getFullYear();
const footer = document.getElementById('copyright');
footer.textContent = `Copyright © ${currentYear}, Ananay Dubey`;