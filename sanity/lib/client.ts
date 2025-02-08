import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '@/sanity//env'

const client = createClient({
    projectId: 'mw82vnfj',
    dataset: 'production',
    useCdn: true, // or false based on your needs
});
