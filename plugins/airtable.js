import Airtable from 'airtable';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});

export const airtable = Airtable.base(process.env.AIRTABLE_WORKSPACE_API);
