// Function to fetch latest forms and populate HTML
function fetchLatestForms() {
    $.ajax({
      url: "http://localhost:4000/ucmportal/form/accepted",
      type: "GET",
      success: function (response) {
        // Clear existing content
        $("#latest").empty();
  
        // Iterate over the response data and create HTML elements
        response.forEach(function (form) {
          var column = $("<div>").addClass("column");
          var card = $("<div>").addClass("card");
          var image = $("<img>").attr("src", form.logo);
          var judul = $("<p>").addClass("judul").text(form.title);
          var tutup = $("<p>").addClass("tutup").text(form.type);
          var selengkapnya = $("<button>").attr("id", "selengkapnya").text("Selengkapnya").click(function() {
            show('popupmore2');
          });
          
          card.append(image, judul, tutup, selengkapnya);
          column.append(card);
          $("#latest").find(".row").append(column);
        });
      },
      error: function (xhr, status, error) {
        console.error("Terjadi kesalahan saat mengambil data form terbaru:", error);
      }
    });
  }
  
  // Fetch latest forms on page load
  $(document).ready(function () {
    fetchLatestForms();
  });
  