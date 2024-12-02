/*resume*/

function openModal(educationId) {
  let modalId = '';
  switch (educationId) {
    case 1:
      modalId = '#educationModal1';
      break;
    case 2:
      modalId = '#educationModal2';
      break;
    case 3:
      modalId = '#educationModal3';
      break;
  }



  // Show the modal with the corresponding ID
  const modal = new bootstrap.Modal(document.querySelector(modalId));
  modal.show();
}
  

const openCardBtn = document.getElementById('openCardBtn');
const popupCard = document.getElementById('popupCard');
const closeCardBtn = document.getElementById('closeCardBtn');

// Show the popup card when the button is clicked
openCardBtn.addEventListener('click', () => {
    popupCard.style.display = 'flex'; // Show the popup
});

// Close the popup card when the close button is clicked
closeCardBtn.addEventListener('click', () => {
    popupCard.style.display = 'none'; // Hide the popup
});

// Close the popup if the user clicks outside the card
popupCard.addEventListener('click', (event) => {
    if (event.target === popupCard) {
        popupCard.style.display = 'none'; // Hide the popup
    }
});




/*Contact*/
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name-field").value;
    const email = document.getElementById("email-field").value;
    const subject = document.getElementById("subject-field").value;
    const message = document.getElementById("message-field").value;

    const loadingMessage = document.getElementById("loading-message");
    const errorMessage = document.getElementById("error-message");
    const sentMessage = document.getElementById("sent-message");

    loadingMessage.style.display = "none";
    errorMessage.style.display = "none";
    sentMessage.style.display = "none";

    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
      return false;
    }

    loadingMessage.style.display = "block";

    setTimeout(() => {
      loadingMessage.style.display = "none";
      sentMessage.style.display = "block";
    }, 2000);

    return true;
  }
