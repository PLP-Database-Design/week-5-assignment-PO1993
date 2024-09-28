const express = require('express');
const app = express();

// Sample providers data
const providers = [{
        provider_id: 1,
        first_name: 'Alice',
        last_name: 'Johnson',
        provider_specialty: 'Cardiology',
    },
    {
        provider_id: 2,
        first_name: 'Bob',
        last_name: 'Williams',
        provider_specialty: 'Dermatology',
    },
    {
        provider_id: 3,
        first_name: 'Charlie',
        last_name: 'Brown',
        provider_specialty: 'Cardiology',
    },
];

// GET endpoint to retrieve providers by specialty
app.get('/providers', (req, res) => {
    const { specialty } = req.query;

    if (!specialty) {
        return res.status(400).json({ error: 'Please provide a specialty' });
    }

    const filteredProviders = providers.filter(
        (provider) => provider.provider_specialty.toLowerCase() === specialty.toLowerCase()
    );

    if (filteredProviders.length === 0) {
        return res.status(404).json({ message: 'No providers found with the given specialty' });
    }

    res.json(filteredProviders);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});