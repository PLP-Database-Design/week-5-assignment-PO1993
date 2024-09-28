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
    {
        patient_id: 3,
        first_name: 'John',
        last_name: 'Brown',
        date_of_birth: '1992-09-25',
    },
];

// GET endpoint to retrieve patients by first name
app.get('/patients', (req, res) => {
    const { first_name } = req.query;

    if (!first_name) {
        return res.status(400).json({ error: 'Please provide a first name' });
    }

    const filteredPatients = patients.filter(
        (patient) => patient.first_name.toLowerCase() === first_name.toLowerCase()
    );

    if (filteredPatients.length === 0) {
        return res.status(404).json({ message: 'No patients found with the given first name' });
    }

    res.json(filteredPatients);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});