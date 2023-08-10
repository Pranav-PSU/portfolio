// Job roles and titles for experience
let pinkyPromiseHtml = `<ul>
<li>Architected and developed full-stack solutions, REST APIs, and integrated scheduling functions adhering to best-in-class standards. Incorporated robust security measures using encryption, SSL, and HTTPS to ensure data protection</li>
<li>Spearheaded the design and implementation of features such as Chat-bot, Chatroom, and E-commerce, seamlessly integrating communication APIs like Twilio and Nexmo</li>
<li>Deepened proficiency in rigorous unit testing and ensured consistent code quality through automated testing frameworks like Jest, Jasmine, Mocha etc</li>
<li>Collaborated in agile teams, actively participating in sprint planning, retrospectives, and continuous integration processes</li>
  </ul>  
  `;
let pinkyPromiseTitle = "Senior Software Developer (Contract)";

let asplHtml = `<ul>
<li>Architected and developed robust full-stack projects using the MEAN stack, enhancing API security and performance</li>
<li>Led the design and deployment of hybrid mobile applications using of Flutter and React Native</li>
<li>Successfully managed a team of 14 developers, guaranteeing timely project delivery meeting company standards</li>
<li>Deepened proficiency in unit testing and testing strategies, assuring application stability and reliability</li>
<li>Embraced agile methodologies, facilitating efficient backlog grooming, sprint planning, and iterative development</li>
  </ul>  
  `;
let asplTitle = "Senior Software Developer";

let kaldinHtml = `<ul>
<li>Custom-built CRM system, Vehicle tracking system using Java, integrating third-party APIs such as SMS and Email Gateways, Google Maps, and Directions API, ensuring optimized user experience and extended functionality</li>
<li>Contributed holistically to the software development cycle, supporting the team and management in design, coding, analysis, and related tasks</li>
<li>Adopted unit testing best practices and deployed testing frameworks, ensuring software reliability and quality</li>
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
