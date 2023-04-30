$(document).ready(function() {
    // Load latest anime
    $.ajax({
        url: 'https://kitsu.io/api/edge/anime?sort=-createdAt&limit=10',
        method: 'GET',
        success: function(data) {
            var latestAnime = data.data;
            $.each(latestAnime, function(index, anime) {
                var imageUrl = anime.attributes.posterImage.small;
                var title = anime.attributes.canonicalTitle;
                var score = anime.attributes.averageRating;

                // Create a new card for each anime
                var animeCard = '<div class="card">';
                animeCard += '<img src="' + imageUrl + '" alt="' + title + '">';
                animeCard += '<h3>' + title + '</h3>';
                animeCard += '<p>Score: ' + score + '</p>';
                animeCard += '</div>';

                // Add the anime card to the latest anime container
                $('#latest-anime-container').append(animeCard);
            });
        },
        error: function() {
            $('#latest-anime-container').html('<p>An error occurred. Please try again later.</p>');
        }
    });

    // Load latest episodes
    $.ajax({
        url: 'https://kitsu.io/api/edge/episodes?sort=-createdAt&limit=10',
        method: 'GET',
        success: function(data) {
            var latestEpisodes = data.data;
            $.each(latestEpisodes, function(index, episode) {
                var imageUrl = episode.attributes.thumbnail.small;
                var title = episode.attributes.titles.en_jp;
                var episodeNumber = episode.attributes.episodeNumber;
                var animeTitle = episode.attributes.animeCanonicalTitle;

                // Create a new card for each episode
                var episodeCard = '<div class="card">';
                episodeCard += '<img src="' + imageUrl + '" alt="' + title + '">';
                episodeCard += '<h3>' + title + '</h3>';
                episodeCard += '<p>Episode ' + episodeNumber + ' of ' + animeTitle + '</p>';
                episodeCard += '</div>';

                // Add the episode card to the latest episodes container
                $('#latest-episodes-container').append(episodeCard);
            });
        },
        error: function() {
            $('#latest-episodes-container').html('<p>An error occurred. Please try again later.</p>');
        }
    });
});
