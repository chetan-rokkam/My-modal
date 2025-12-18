const modalContainer = document.getElementById('modalContainer');
const closeButton = document.getElementById('closeButton'); 
const confirmRemoveButton = document.getElementById('confirmRemoveButton'); 
const nameList = document.getElementById('head');
 
 
let currentItemToBeRemoved = null;
 
function openModal(itemElement) {
    currentItemToBeRemoved = itemElement; 
    modalContainer.style.display = 'block'; 
}
 
function closeModal() {
    modalContainer.style.display = 'none';
    currentItemToBeRemoved = null; 
}
 
function handleRemovalConfirmation() {
    if (currentItemToBeRemoved) {
        currentItemToBeRemoved.remove(); 
    }
    closeModal();
}
 
nameList.addEventListener('click', function(event) {
 
    if (event.target && event.target.matches('.remove-btn')) {

 const listItemContainer = event.target.closest('.mode');
 
        if (listItemContainer) {
 
            openModal(listItemContainer); 
        }
    }
});
 
closeButton.addEventListener('click', closeModal);
confirmRemoveButton.addEventListener('click', handleRemovalConfirmation);
 
