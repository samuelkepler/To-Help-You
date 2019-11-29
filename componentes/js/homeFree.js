// duas ferramentas de busca

// const list = document.querySelector('#cards');
// const forms = document.forms;

// const searchBar = forms['search-video'].querySelector('input');
// searchBar.addEventListener('keyup', (e) => {
//   const term = e.target.value.toLowerCase();
//   const videos = list.getElementsByTagName('p');
//   Array.from(videos).forEach((video) => {
//     const title = video.firstElementChild.textContent;
//     if(title.toLowerCase().indexOf(e.target.value) != -1){
//       video.style.display = 'block';
//     } else {
//       video.style.display = 'none';
//     }
//   });
// });

$("#search-video").keyup(function() {
  let text = $(this).val();
  $(".boxes div.card").each(function() {
    if ($(this).text().indexOf(text)<0) {
      $(this).css("dispay","none");
    }
    else if ($(this).text().indexOf(text)>0) {
      $(this).css("display","block").addClass("filterAdjust2");
      $(".boxes div#cards").addClass("filterAdjust");
    }
    else if (text=="") {
      $(this).css("disply", "block").removeClass("filterAdjust2");
      $(".boxes dic#cards").removeClass("filterAdjusted");

    }
  })  
})


