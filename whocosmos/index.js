async function fetchData() {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();

    return data;
}

const table = document.getElementById('data-table');
const button = document.getElementById('button');

button.addEventListener('click', async () => {
    try {
        const data = await fetchData();
        if(data.message != "success") 
        
        throw new Error("Unable to fetch");

        console.log(data);

        console.log(data.people);

        const people = data.people.forEach(person => {
            // create new TR
            const newRow = document.createElement('tr');

            // create new TD
            const nameCell = document.createElement('td');
            const craftCell = document.createElement('td');

            // add person.name to TD
            nameCell.textContent = person.name;

            craftCell.textContent = person.craft;

            // append
            newRow.appendChild(nameCell);
            newRow.appendChild(craftCell);
            table.appendChild(newRow);
        })

    } catch(error) {
        console.log(error);
    }
    
})