
const participantForm = document.querySelector("#participant-form");
const participantError = '';
const participantList = document.querySelector('#participant-list')

participantForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector('#participant-name');
    const name = input.value.trim();
    const roleSelector = document.querySelector('#participant-role');
    const role = roleSelector.value;

    if (name === ''){
        return;
    };

    

    const participantCard = createParticipantCard(name, role);

    participantList.append(participantCard)

    
    input.value = "";
    
    
});

participantList.addEventListener("click", (event) => {
  const clickedButton = event.target.closest("button[data-action]");

  if (!clickedButton) {
    return;
  }

  const participantCard = clickedButton.closest(".participant");

  if (clickedButton.dataset.action === "toggle") {
    participantCard.classList.toggle("inactive");
  }
});


function createParticipantCard (name, role) {
    
     

    console.log("Form submit was stopped");

    const card = document.createElement('div');
    const info = document.createElement('span');
    const toggleBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    card.classList.add("participant");
    info.classList.add("participant-info");

    info.textContent = `${name} - ${role}`;

    toggleBtn.textContent = 'Toggle status';
    toggleBtn.type = 'button';
    toggleBtn.dataset.action = 'toggle';

    deleteBtn.textContent = 'Delete';
    deleteBtn.type = 'button';
    deleteBtn.dataset.action = 'delete';

    deleteBtn.addEventListener('click', (event) => {
        card.remove()
    })

    toggleBtn

    card.append(info, toggleBtn, deleteBtn);

    

    return card;
}