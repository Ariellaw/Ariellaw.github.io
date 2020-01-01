// const wchar_tkDisableWebSecurity = "disable-web-security";

$(document).ready(function () {
  $('#characterLeft').text('200 characters left')
  $('#message').keydown(function () {
    var max = 200
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
  console.log('the function is being called!')
  document
    .querySelector('.offcanvas-btn')
    .classList.toggle('offcanvas-btn-open')
  document
    .querySelector('.offcanvas-aside')
    .classList.toggle('offcanvas-aside-open')
}

function submitForm () {
  // wchar_tkDisableWebSecurity;
    var form = document.querySelector('form');
    var name = form.querySelector('#name').value
    var email = form.querySelector('#email').value
    var mobile = form.querySelector('#mobile').value
    var subject = form.querySelector('#subject').value
    var message = form.querySelector('#message').value

    console.log(form, name, email, mobile,subject, message);
  return axios.post("https://ariellagram.herokuapp.com/contact", {name, email, mobile,subject, message}).then(res => {
      console.log("res.data",res===null)
    return res.data;
  })
}

// "https://ariellagram.herokuapp.com/contact"

