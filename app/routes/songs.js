import Ember from 'ember';

var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
})

export default Ember.Route.extend({
  model: function() {
    var blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });
    var yellowLedbetter = Song.create({
      title: 'Yellow Lednbetter',
      band: 'Pearl Jam',
      rating: 4
    });
    var pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });
    return [blackDog, yellowLedbetter, pretender];
  }
});
