/*
Istruzioni:
Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. https://flynn.boolean.careers/exercises/api/array/music
Servendoci di Vue JS stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.
Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
*/

const app = new Vue({
    el: "#app",
    data: {
        discs: [],
        genres: [],
        optionValue: "",
    },
    methods: {
        filterByGenre(optionValue) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/array/music")
                .then((response) => {
                    let discs = response.data.response;
                    if (this.optionValue == "All") {
                        this.discs = discs;
                    } else {
                        this.discs = discs.filter(
                            (disc) => disc.genre == optionValue
                        );
                    }
                })
                .catch((error) => console.log(error));
        },
    },
    mounted() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((response) => {
                let discs = response.data.response;
                this.discs = discs;

                let genres = [];
                discs.forEach((disc) => {
                    genres.push(disc.genre);
                });
                this.genres = Array.from(new Set(genres));
            })
            .catch((error) => console.log(error));
    },
});
