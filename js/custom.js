// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function openPopup(id) {
  document.getElementById(id).style.display = "block";
}
function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

// Modal açma işlevi
document.querySelectorAll(".open-modal-btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    const modalId = event.target.getAttribute("href").substring(1); // Modal ID'sini al
    const modal = document.getElementById(modalId);
    modal.style.display = "block"; // Modal'ı göster
  });
});

// Modal kapama işlevi
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none"; // Modal'ı gizle
}

// Sayfa dışında bir yere tıklanırsa modal'ı kapat
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
