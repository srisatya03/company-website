const chatbotToggle=document.getElementById('chatbot-toggle');
const chatbotContainer=document.getElementById('chatbot-container');
const chatbotMessages=document.querySelector('.chatbot-messages');
const chatbotInput=document.getElementById('chatbot-input');
const chatbotSend=document.getElementById('chatbot-send');
chatbotToggle.addEventListener('click', () =>{
  chatbotContainer.classList.toggle('visible');
});
chatbotSend.addEventListener('click', () =>{
  const userMessage=chatbotInput.value.trim();
  if (userMessage){
    displayMessage(userMessage, 'user');
    chatbotInput.value='';
    generateResponse(userMessage);
  }
});
function displayMessage(message, sender){
  const messageElement=document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent=message;
  chatbotMessages.appendChild(messageElement);
  chatbotMessages.scrollTop=chatbotMessages.scrollHeight;
}
function generateResponse(userMessage){
  let response='Let me assist you with that.';
  if (userMessage.toLowerCase().includes('hello')){
    response='Hello! How can I help you today?';
  }
  else if (userMessage.toLowerCase().includes('services')){
    response='We offer web development, cloud solutions, and UI/UX design.';
  }
  else if (userMessage.toLowerCase().includes('contact')){
    response='You can contact us via the contact form on our website.';
  }
  setTimeout(() => displayMessage(response, 'chatbot'), 500);
}
chatbotInput.addEventListener('keypress', (event) =>{
  if (event.key==='Enter'){
    chatbotSend.click();
  }
});
const contactForm=document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for reaching out. We will get back to you soon!');
  contactForm.reset();
});