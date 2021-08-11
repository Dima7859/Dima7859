// export const dragAndDrop = task => {
//   // const task = document.querySelector('.boardsContent__allColumns__overflowBlock__column__taskStorage__task');
//   const allTaskStorages = document.querySelectorAll('.boardsContent__allColumns__overflowBlock__column__taskStorage');

  // const dragStart = function () {
  //   setTimeout(() => {
  //     this.classList.add('hide');
  //   }, 0)
  // };

  // const dragEnd = function () {
  //   this.classList.remove('hide');
  // };

  // const dragOver = function (event) {
  //   event.preventDefault();
  // };

  // const dragEnter = function (event) {
  //   event.preventDefault();
  //   this.classList.add('hovered');
  // };

  // const dragLeave = function () {
  //   this.classList.remove('hovered');
  // };

  // const dragDrop = function () {
  //   this.append(task);
  //   this.classList.remove('hovered');
  // };

//   allTaskStorages.forEach( storage  => {
//     storage.addEventListener('dragover', dragOver);
//     storage.addEventListener('dragenter', dragEnter);
//     storage.addEventListener('dragleave', dragLeave);
//     storage.addEventListener('drop', dragDrop);
//   })

//   task.addEventListener('dragstart', dragStart);
//   task.addEventListener('dragend', dragEnd);
// };

// export const dragAndDrop = () => {
//   const
// }

export function allowDrop(event) {
      event.preventDefault();
}

export function drag (event) {
  event.dataTransfer.setData('id', event.target.id);
  setTimeout(() => {
    this.classList.add('hide');
  }, 0)
}

export const dragEnd = function () {
  this.classList.remove('hide');
};

export const dragOver = function (event) {
  event.preventDefault();
};

export const dragEnter = function (event) {
  event.preventDefault();
  this.classList.add('hovered');
};

export const dragLeave = function () {
  this.classList.remove('hovered');
};

export const dragDrop = function () {
  let itemId = event.dataTransfer.getData('id');
  this.prepend(document.getElementById(itemId));
  this.classList.remove('hovered');
};

export function drop (event) {
  let itemId = event.dataTransfer.getData('id');
  console.log('sahd', itemId);
  event.target.prepend(document.getElementById(itemId));
}