const list = document.querySelector('#cards');
const forms = document.forms;

const searchBar = forms['search-video'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const videos = list.getElementsByTagName('p');
  Array.from(videos).forEach((video) => {
    const title = video.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      video.style.display = 'block';
    } else {
      video.style.display = 'none';
    }
  });
});
