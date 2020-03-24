import fs from 'fs';
import ghpages from 'gh-pages';
import doc from './doczrc';
 
fs.copyFileSync('CNAME', '.docz/dist/CNAME');

ghpages.publish('.docz/dist', doc.ghPages, (err) => {
    if (err) {
        console.error('Publish failed.');
        console.error(err);
    } else {
        console.log('Published.');
    }
});
