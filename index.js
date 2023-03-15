// Job roles and titles for experience
let pinkyPromiseHtml = `<ul>
    <li> Developed full-Stack projects, REST APIs, back-end business logic, complex algorithms, and scheduling functions that run on specific time intervals.
  </li>
    <li>Implemented modules like Chat-bot, Chatroom, and E-commerce along with communication APIs which are Twilio, and Nexmo. </li>
    <li>Learned data transmission and network protocols, designing high-quality software and architecture.</li>
  </ul>  
  `;
let pinkyPromiseTitle = "Senior Software Developer (Contract)";

let asplHtml = `<ul>
  <li> Developed highly functional full-Stack projects in MEAN, REST APIs, complex back-end logic algorithms, API authentication, and security.</li>
  <li> Involved in designing and developing of hybrid mobile applications in Flutter and Ionic Framework.</li>
  <li>Handled Team-Lead position successfully and ensured all projects are completed in time and to company specifications.</li>
  <li>Learned and Involved in task prioritizing, planning and estimation, and creating user flows and prototypes.</li>
  </ul>  
  `;
let asplTitle = "Senior Software Developer";

let kaldinHtml = `<ul>
  <li> Developed customized and highly functional CRM systems in JAVA along with the integration of third-party APIs which are SMS and Email Gateways, Google Maps, Directions API, etc.</li>
  <li>Developed new functionalities, and technologies and integrate them into existing functions.</li>
  <li>Involved in software development, assisted the development team and manager with all aspects of software designing and coding, support, analysis, and all related activities.</li>
</ul>  
`;
let kaldinTitle = "Junior Software Associate";

// Function to append the job description to the modal and to open a modal
$(".cardClickOpenModal").click(function () {
  let html = "";
  let title = "";
  switch (this.id) {
    case "pinkyPromiseCardModalToggle": {
      html = pinkyPromiseHtml;
      title = pinkyPromiseTitle;
      break;
    }
    case "kaldinCardModalToggle": {
      html = kaldinHtml;
      title = kaldinTitle;
      break;
    }
    case "asplCardModalToggle": {
      html = asplHtml;
      title = asplTitle;
      break;
    }
    default: {
      console.warn("Invalid Data");
    }
  }
  $(".modal-body").empty();
  $(".modal-title").empty();
  $("<h5>").html(title).appendTo(".modal-title");
  $("<p>").html(html).appendTo(".modal-body");

  $("#JobDescriptionModal").modal("show");
});

// Function to make the clicked nav item active
$("nav ul li a").click(function () {
  $("li a").removeClass("active");
  $(this).addClass("active");
});

// Function to show or hide the scroll to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".ButtonScrollToTop").fadeIn();
  } else {
    $(".ButtonScrollToTop").fadeOut();
  }
});

// Function to scroll the screen to the top
$(".ButtonScrollToTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 100);
  $("li a").removeClass("active");
  $(".homeNavItem").addClass("active");
  return false;
});
