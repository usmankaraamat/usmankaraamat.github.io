document.getElementById('year').textContent = new Date().getFullYear();

const cueVisual = document.querySelector('.cue-visual');
const descriptions = {
  phone: 'Edit the phone region and ask whether the prediction changes.',
  context: 'Edit a matched surrounding region to check whether the effect is specific to the object.'
};
document.querySelectorAll('[data-edit]').forEach(button => {
  button.addEventListener('click', () => {
    cueVisual.dataset.mode = button.dataset.edit;
    cueVisual.querySelector('.edit-description').textContent = descriptions[button.dataset.edit];
    cueVisual.querySelectorAll('[data-edit]').forEach(item => {
      item.setAttribute('aria-pressed', String(item === button));
    });
  });
});
