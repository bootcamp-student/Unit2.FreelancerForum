document.addEventListener('DOMContentLoaded', function () {

    const freelancers = [
        { name: "Dr. Slice", price: 25, occupation: "gardener" },
        { name: "Dr. Pressure", price: 51, occupation: "programmer" },
        { name: "Prof. Possibility", price: 43, occupation: "teacher" },
        { name: "Prof. Prism", price: 81, occupation: "teacher" },
        { name: "Dr. Impulse", price: 43, occupation: "teacher" },
        { name: "Prof. Spark", price: 76, occupation: "programmer" },
        { name: "Dr. Wire", price: 47, occupation: "teacher" },
        { name: "Prof. Goose", price: 72, occupation: "driver" },
    ];

    const freelancerList = document.getElementById('freelancerList');


    let totalStartingPrice = 0;


    for (let i = 0; i < freelancers.length; i++) {
        const freelancer = freelancers[i];
        const listItem = document.createElement('li');
        listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - Starting Price: $${freelancer.price}`;
        listItem.dataset.startingPrice = freelancer.price;
        freelancerList.appendChild(listItem);
        totalStartingPrice += freelancer.price;
    }
    const averageStartingPrice = totalStartingPrice / freelancers.length;
    const averagePriceValue = document.getElementById('averagePriceValue');
    averagePriceValue.textContent = `$${averageStartingPrice.toFixed(2)}`;
});
