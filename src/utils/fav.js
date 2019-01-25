export default function () {
  methods: {
    favoriteNumSetter: function () {
      let favorites = window.localStorage
        .getItem("favorites")
        .split(",")
        .filter(function (e) {
          return e !== "";
        });

      return favorites.length;
    }
  }
}