import Ember from 'ember';

export default Ember.Controller.extend({
  songCreationStarted: false,

  canCreateSongs: Ember.computed('songCreationStarted', 'model.songs.length', function() {
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),

  actions: {
    updateRating: function(params) {
      var song = params.item,
      rating = params.rating;

      song.set('rating', rating);
    },
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },
  }

});
