import * as lr from 'lucide-react';
const keys = Object.keys(lr);
const simpleNames = keys.filter(k => k.match(/^[A-Z][a-z]+$/) && !k.includes('Icon')).sort();

console.log('Total icons:', keys.length);
console.log('Icons matching pattern:', simpleNames.length);
console.log('\nSample icons (first 50):');
console.log(simpleNames.slice(0, 50).join('\n'));

// Check for specific icons
const neededIcons = ['Github', 'Linkedin', 'Mail', 'Calendar', 'MapPin', 'Award', 'Briefcase', 'Code', 'BookOpen', 'CheckCircle'];
console.log('\n\nChecking needed icons:');
neededIcons.forEach(icon => {
  const found = keys.find(k => k.toLowerCase() === icon.toLowerCase());
  console.log(`${icon}: ${found || 'NOT FOUND'}`);
});
