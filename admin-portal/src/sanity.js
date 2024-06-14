import sanityClient from '@sanity/client';

// Replace these values with your project ID, dataset, and token
const projectId = 'shseeu3w';
const dataset = 'production';
const token = 'skcyoxBDH5tPSoaYQU8KLhHsBOOmNLhd3HWTnCq96c1hnwftKNLn6t0EdVXRaoBAuvCIuTpY463dbLE1oW2ANIaFbV72YJP45iraaQDz7MYHluJ3ZtI6E6VBlWBsvCABEwYzKcmlIPUAkCRVPehnUGbdvAzy6mKJg6OuUJXRYbicAFBxxsfa';

const client = sanityClient ({
  projectId: projectId,
  dataset: dataset,
  token: token, // Authorization token
  useCdn: false // `false` if you want to ensure fresh data
});

// Example query to fetch data
client.fetch('*[_type == "post"]').then(posts => {
  console.log('Posts:', posts);
}).catch(error => {
  console.error('Error fetching posts:', error);
});

// Example mutation to create a document
client.create({
  _type: 'post',
  title: 'My New Post',
  body: 'This is the content of my new post.'
}).then(response => {
  console.log('Document created:', response);
}).catch(error => {
  console.error('Error creating document:', error);
});

export default client;