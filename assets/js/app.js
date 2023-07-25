
function toggleMenu() {
  var menu = document.querySelector('.menu-list');
  menu.classList.toggle('active');
}const pdfData = {
  class1: {
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%201.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/July/Cl.1%20(July).pdf" },
      { name: "Yearly", url: "https://vsecnblock.com/syllabus/Yearly_Syllabus_Cl.1.pdf" }
    ],
    holidayHomework: [
      { name: "Summer", url: "https://vsecnblock.com/syllabus/Homework/CLASS%201.pdf"},
      { name: "Winter", url: "coming-soon.html" },
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%201-8.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/JULY%20TEST%20DATESHEET.pdf" },
    ]
  },
  class2: {
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%202.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/July/Cl.2%20(July).pdf" },
      { name: "Yearly", url: "https://vsecnblock.com/syllabus/Yearly_Syllabus_Cl.2.pdf" }
    ],
    holidayHomework: [
      { name: "Summer", url: "https://vsecnblock.com/syllabus/Homework/CLASS%202.pdf"},
      { name: "Winter", url: "coming-soon.html" },
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%201-8.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/JULY%20TEST%20DATESHEET.pdf" },
    ]
  },
  class3: {
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%203.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/July/Cl.3%20(July).pdf" },
      { name: "Yearly", url: "https://vsecnblock.com/syllabus/Yearly_Syllabus_Cl.3.pdf" }
    ],
    holidayHomework: [
      { name: "Summer", url: "https://vsecnblock.com/syllabus/Homework/CLASS%203.pdf"},
      { name: "Winter", url: "coming-soon.html" },
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%201-8.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/JULY%20TEST%20DATESHEET.pdf" },
    ]
  },
  class4: {
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%204.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/July/Cl.4%20(July).pdf" },
      { name: "Yearly", url: "https://vsecnblock.com/syllabus/Yearly_Syllabus_Cl.4.pdf" }
    ],
    holidayHomework: [
      { name: "Summer", url: "https://vsecnblock.com/syllabus/Homework/CLASS%204.pdf"},
      { name: "Winter", url: "coming-soon.html" },
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%201-8.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/JULY%20TEST%20DATESHEET.pdf" },
    ]
  },
  class5: {
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%205.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/July/Cl.5%20(July).pdf" },
      { name: "Yearly", url: "https://vsecnblock.com/syllabus/Yearly_Syllabus_Cl.5.pdf" }
    ],
    holidayHomework: [
      { name: "Summer", url: "https://vsecnblock.com/syllabus/Homework/CLASS%205.pdf"},
      { name: "Winter", url: "coming-soon.html" },
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%201-8.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/JULY%20TEST%20DATESHEET.pdf" },
    ]
  },
  class6: {
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%206.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/July/Cl.6%20(July).pdf" },
      { name: "Yearly", url: "https://vsecnblock.com/syllabus/Yearly_Syllabus_Cl.6.pdf" }
    ],
    holidayHomework: [
      { name: "Summer", url: "https://vsecnblock.com/syllabus/Homework/CLASS%206.pdf"},
      { name: "Winter", url: "coming-soon.html" },
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%201-8.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/JULY%20TEST%20DATESHEET.pdf" },
    ]
  },
  class7: {
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%207.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/July/Cl.7%20(July).pdf" },
      { name: "Yearly", url: "https://vsecnblock.com/syllabus/Yearly_Syllabus_Cl.7.pdf" }
    ],
    holidayHomework: [
      { name: "Summer", url: "https://vsecnblock.com/syllabus/Homework/CLASS%207.pdf"},
      { name: "Winter", url: "coming-soon.html" },
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%201-8.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/JULY%20TEST%20DATESHEET.pdf" },
    ]
  },
  class8: {
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%208.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/July/Cl.8%20(July).pdf" },
      { name: "Yearly", url: "https://vsecnblock.com/syllabus/Yearly_Syllabus_Cl.8.pdf" }
    ],
    holidayHomework: [
      { name: "Summer", url: "https://vsecnblock.com/syllabus/Homework/CLASS%208.pdf"},
      { name: "Winter", url: "coming-soon.html" },
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%201-8.pdf" },
      { name: "July", url: "https://vsecnblock.com/syllabus/JULY%20TEST%20DATESHEET.pdf" },
    ]
  },
  class9: {
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%209.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/August/IX.pdf" },
      { name: "Yearly", url: "https://vsecnblock.com/syllabus/Yearly_Syllabus_Cl.9.pdf" }
    ],
    holidayHomework: [
      { name: "Summer", url: "https://vsecnblock.com/syllabus/Homework/CLASS%209.pdf"},
      { name: "Winter", url: "coming-soon.html" },
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%209-12.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/AUGUST/August%20Test%20Date%20Sheet%20Cl.%209-12.pdf" },
    ]
  },
  class10: {
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%2010.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/August/X.pdf" },
      { name: "Yearly", url: "https://vsecnblock.com/syllabus/Yearly_Syllabus_Cl.10.pdf" }
    ],
    holidayHomework: [
      { name: "Summer", url: "https://vsecnblock.com/syllabus/Homework/CLASS%2010.pdf"},
      { name: "Winter", url: "coming-soon.html" },
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%209-12.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/AUGUST/August%20Test%20Date%20Sheet%20Cl.%209-12.pdf" },
    ]
  },
  class11PCM:{
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%2011.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/AUGUST/XI-SCIENCE.pdf" }
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%209-12.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/AUGUST/August%20Test%20Date%20Sheet%20Cl.%209-12.pdf" },
    ]
  },
  class11Commerce:{
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%2011.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/AUGUST/XI-COMMERCE.pdf" }
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%209-12.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/AUGUST/August%20Test%20Date%20Sheet%20Cl.%209-12.pdf" },
    ]
  },
  class12PCM: {
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%2012.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/AUGUST/XII-%20SCIENCE.pdf" }
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%209-12.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/AUGUST/August%20Test%20Date%20Sheet%20Cl.%209-12.pdf" },
    ]
  },
  class12Commerce:{
    syllabus: [
      { name: "May", url: "https://vsecnblock.com/syllabus/may/May%20Test%20Cl.%2012.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/AUGUST/XII-%20COMMERCE.pdf" }
    ],
    datesheet: [
      { name: "May", url: "https://vsecnblock.com/syllabus/MAY%20TEST%209-12.pdf" },
      { name: "August", url: "https://vsecnblock.com/syllabus/AUGUST/August%20Test%20Date%20Sheet%20Cl.%209-12.pdf" },
    ]
  },
};

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