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


      if (song.get('rating') === rating) {
        rating = 0;
      }
      song.set('rating', rating);
      return song.save();
    },
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },
  }

});
