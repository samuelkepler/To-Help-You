const searchBar = document.forms['search'].queryselector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const videos = list.getElementsByTagName('body');
    Array.from(books).forEach(function(video){
        const title = video.firstElementChild.text.Content;
        if (title.toLowerCase().indexOf(term) != -1) {
            video.style.disply = 'block';
        } else {
            video.style.disply = 'none';
        }
    })
})
