const successMessage = "250 OK , completed";

$(document).ready(function () {
  $('#characterLeft').text('200 characters left')
  $('#message').keydown(function () {
    $('#characterLeft').removeClass('notDisplayed');
    $('#successMessage').addClass('notDisplayed');
    $('#failureMessage').addClass('notDisplayed');

    var max = 300
    var len = $(this).val().length
    if (len >= max) {
      $('#characterLeft').text('You have reached the limit')
      $('#characterLeft').addClass('red')
      $('#btnSubmit').addClass('disabled')
    } else {
      var ch = max - len
      $('#characterLeft').text(ch + ' characters left')
      $('#btnSubmit').removeClass('disabled')
      $('#characterLeft').removeClass('red')
    }
  })
})

function openCanvas() {
  $('#successMessage').addClass('notDisplayed');
  $('#failureMessage').addClass('notDisplayed');

  document
    .querySelector('.offcanvas-btn')
    .classList.toggle('offcanvas-btn-open')
  document
    .querySelector('.offcanvas-aside')
    .classList.toggle('offcanvas-aside-open')
}

function submitForm () {
    var form = document.querySelector('form');
    var nameEl = form.querySelector('#name');
    var emailEl = form.querySelector('#email');
    var mobileEl = form.querySelector('#mobile');
    var subjectEl = form.querySelector('#subject');
    var messageEl = form.querySelector('#message');
    $('#loading').removeClass('notDisplayed');

  return axios.post("https://ariellagram.herokuapp.com/contact",{name:nameEl.value, email:emailEl.value, mobile:mobileEl.value,subject:subjectEl.value, message:messageEl.value}).then(res => {
  // return axios.post("http://localhost:3003/contact", {name:nameEl.value, email:emailEl.value, mobile:mobileEl.value,subject:subjectEl.value, message:messageEl.value}).then(res => {
      if(res.data===successMessage){
        nameEl.value="";
        emailEl.value="";
        mobileEl.value="";
        subjectEl.value="";
        messageEl.value="";
        $('#successMessage').removeClass('notDisplayed');
      }else{
        $('#failureMessage').removeClass('notDisplayed');
      }
      $('#loading').addClass('notDisplayed');
      $('#characterLeft').addClass('notDisplayed');
  })  
}

// "https://ariellagram.herokuapp.com/contact"

