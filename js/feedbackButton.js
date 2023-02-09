const feedbackButton = document.getElementById('feedbackButton')
const links = document.getElementById('feedbackContactsWrapper')
const firstSpan = document.getElementById('firstSpan')
const secondSpan = document.getElementById('secondSpan')

feedbackButton.onclick = function () {
   links.classList.toggle('openFeedbackContacts')
   secondSpan.classList.toggle('openSecondSpan')
   firstSpan.classList.toggle('hideFirstSpan')
}