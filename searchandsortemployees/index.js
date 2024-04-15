async function fetchData() {
    try {
        const response = await fetch("http://localhost:3000/employees");
        if(!response.ok) {
            throw new Error("Could not fetch");
        }
        const data = await response.json();
        return data;

    }
    catch(error) {
        return "Unable to fetch ", error;
    }
}


function filteredEmployees(employees, searchStr, sortBy) {
    const filterEmployees = employees.filter(employee => 
        employee.firstName.toLowerCase().includes(searchStr.toLowerCase())
    );

    switch(sortBy) {
        case 'position':
            filterEmployees.sort((a, b) => a.position.localeCompare(b.position));
            break;
        case 'date':
            filterEmployees.sort((a, b) => new Date(a.separationDate) - new Date(b.separationDate));
            break;
        case 'order':
            break;
        default: 
            break;
    }

    const filteredMap = filterEmployees.map(employee => 
        `${employee.firstName} ${employee.lastName} ${employee.position} ${employee.separationDate}`);
    return filteredMap;
};

const selectElement = document.getElementById('sortOptions');
const text = document.getElementById('note');
const button = document.getElementById('button');
const result = document.getElementById('result');

button.addEventListener('click', async () => {
    try {
        let input = note.value;
        const selectedValue = selectElement.value;
        console.log(selectedValue);
        const data = await fetchData();
        const filtered = filteredEmployees(data, input, selectedValue);
        console.log(filtered);
        result.innerHTML = `${filtered}`;
    }
    catch(error) {
        console.log("Error", error);
    } 
});



