$(document).ready(function() {
    $('#search-btn').click(function() {
      var title = $('#search-input').val();
      $('#anime-list').empty(); // Clear any previous search results
  
      $.ajax({
        url: 'https://kitsu.io/api/edge/anime',
        method: 'GET',
        data: {
          filter: {
            text: title
          },
          page: {
            limit: 20
          }
        },
        success: function(data) {
          var animeList = data.data;
          if (animeList.length === 0) {
            $('#anime-list').html('<p>No results found.</p>');
          } else {
            $.each(animeList, function(index, anime) {
              var imageUrl = anime.attributes.posterImage.medium;
              var title = anime.attributes.titles.en_jp;
              var type = anime.attributes.subtype;
              var episodes = anime.attributes.episodeCount;
              var synopsis = anime.attributes.synopsis;
  
              // Create a new card for each anime
              var animeCard = '<div class="anime-card">';
              animeCard += '<img src="' + imageUrl + '" alt="' + title + '">';
              animeCard += '<h3>' + title + '</h3>';
              animeCard += '<p>Type: ' + type + '</p>';
              animeCard += '<p>Episodes: ' + episodes + '</p>';
              animeCard += '<p>Synopsis: ' + synopsis + '</p>';
              animeCard += '</div>';
  
              // Add the anime card to the results container
              $('#anime-list').append(animeCard);
            });
          }
        },
        error: function() {
          $('#anime-list').html('<p>An error occurred. Please try again later.</p>');
        }
      });
    });
  });
  