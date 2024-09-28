const express = require('express');
const app = express();

// Sample patients data
const patients = [{
        patient_id: 1,
        first_name: 'John',
        last_name: 'Doe',
        date_of_birth: '1990-01-01',
    },
    {
        patient_id: 2,
        first_name: 'Jane',
        last_name: 'Smith',
        date_of_birth: '1985-05-15',
    },
];

// GET endpoint to retrieve all patients
app.get('/patients', (req, res) => {
    const patientList = patients.map(({ patient_id, first_name, last_name, date_of_birth }) => ({
        patient_id,
        first_name,
        last_name,
        date_of_birth,
    }));
    res.json(patientList);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});