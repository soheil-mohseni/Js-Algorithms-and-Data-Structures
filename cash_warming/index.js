const express = require('express');
const axios = require('axios'); // Assuming we are fetching data from an external API

const app = express();
const PORT = process.env.PORT || 3000;

// Simple in-memory cache
const cache = {};

// Function to fetch data and populate cache
const warmCache = async () => {
    try {
        // Example URLs to fetch data
        const urls = [
            'https://api.example.com/data1',
            'https://api.example.com/data2',
            'https://api.example.com/data3'
        ];

        // Fetch data from all URLs and populate the cache
        const fetchPromises = urls.map(async (url) => {
            const response = await axios.get(url);
            const key = url.split('/').pop(); // Use the last segment of the URL as the key
            cache[key] = response.data; // Store in cache
        });

        await Promise.all(fetchPromises);
        console.log('Cache warmed with initial data:', cache);
    } catch (error) {
        console.error('Error warming cache:', error);
    }
};

// Middleware to serve data from cache
const cacheMiddleware = (req, res, next) => {
    const key = req.path.split('/').pop(); // Use last part of URL as key
    if (cache[key]) {
        return res.json(cache[key]); // Serve from cache
    } else {
        return next(); // Proceed to next middleware or route handler
    }
};

app.use(cacheMiddleware); // Use the cache middleware

// Example route to fetch data from the source if not in cache
app.get('/data/:id', async (req, res) => {
    const { id } = req.params;

    if (cache[id]) {
        return res.json(cache[id]);
    }

    try {
        const response = await axios.get(`https://api.example.com/data/${id}`);
        cache[id] = response.data; // Update the cache
        return res.json(response.data);
    } catch (error) {
        return res.status(500).send('Error fetching data');
    }
});

// Warm the cache when the server starts
warmCache();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
