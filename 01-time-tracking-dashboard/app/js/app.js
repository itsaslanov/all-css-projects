// All btns
let btns = document.querySelectorAll(".btn");
for (let i = 0; i < btns.length; i++) {
    // All cards
    let cards = document.querySelectorAll(".card__hours");
    // Listen for every btn(basically 3 of them)
    btns[i].addEventListener("click", function (e) {
        // Using filter
        const filter = e.target.dataset.filter;
        let request = new Request('app/js/data.json');

        // Daily
        if (filter == 'daily') {
            document.querySelector(".daily").style.opacity = '1';
            document.querySelector(".weekly").style.opacity = '0.5';
            document.querySelector(".monthly").style.opacity = '0.5';
            // JSON_DATA
            fetch(request)
                .then((resp) => {
                    return resp.json()
                }).then((data) => {
                    let responses = data;
                    responses.forEach((response, i) => {
                        let card = cards[i];
                        card.innerHTML = `
                        <span class="card__active_hours">
                            ${response.timeframes.daily.current}hrs
                        </span>
                        <span class="card__weekly_hours">
                            Last Day - ${response.timeframes.daily.previous}hrs
                        </span>
                        `
                    })
                })
        }

        // Weekly
        if (filter == 'weekly') {
            document.querySelector(".daily").style.opacity = '0.5';
            document.querySelector(".weekly").style.opacity = '1';
            document.querySelector(".monthly").style.opacity = '0.5';
            // JSON_DATA
            fetch(request)
                .then((resp) => {
                    return resp.json()
                }).then((data) => {
                    let responses = data;
                    responses.forEach((response, i) => {
                        let card = cards[i];
                        card.innerHTML = `
                        <span class="card__active_hours">
                            ${response.timeframes.weekly.current}hrs
                        </span>
                        <span class="card__weekly_hours">
                            Last Week - ${response.timeframes.weekly.previous}hrs
                        </span>
                        `
                    })
                })
        }

        // Monthly
        if (filter == 'monthly') {
            document.querySelector(".daily").style.opacity = '0.5';
            document.querySelector(".weekly").style.opacity = '0.5';
            document.querySelector(".monthly").style.opacity = '1';
            // JSON_DATA
            fetch(request)
                .then((resp) => {
                    return resp.json()
                }).then((data) => {
                    let responses = data;
                    responses.forEach((response, i) => {
                        let card = cards[i];
                        card.innerHTML = `
                        <span class="card__active_hours">
                            ${response.timeframes.monthly.current}hrs
                        </span>
                        <span class="card__weekly_hours">
                            Last Month - ${response.timeframes.monthly.previous}hrs
                        </span>
                        `
                    })
                })
        }
    })
}