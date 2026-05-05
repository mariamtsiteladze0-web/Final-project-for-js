const massive = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Classic Fiction'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Historical Fiction'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Dystopian'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy'
  }
];

const container = document.createElement('div');
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(220px, 1fr))';
container.style.gap = '16px';
container.style.padding = '16px';
container.style.fontFamily = 'Arial, sans-serif';
container.style.backgroundColor = '#f4f4f4';
container.id = 'book-cards-container';

document.body.appendChild(container);

for (let i = 0; i < massive.length; i++) {
  const book = massive[i];
  const card = document.createElement('div');
  card.style.backgroundColor = '#ffffff';
  card.style.padding = '16px';
  card.style.borderRadius = '10px';
  card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.08)';
  card.style.border = '1px solid #e0e0e0';
  card.style.minHeight = '160px';

  const title = document.createElement('h2');
  title.textContent = book.title;
  title.style.margin = '0 0 8px 0';
  title.style.fontSize = '1.1rem';

  const author = document.createElement('p');
  author.textContent = `Author: ${book.author}`;
  author.style.margin = '0 0 6px 0';
  author.style.color = '#555';

  const year = document.createElement('p');
  year.textContent = `Year: ${book.year}`;
  year.style.margin = '0 0 6px 0';
  year.style.color = '#555';

  const genre = document.createElement('p');
  genre.textContent = `Genre: ${book.genre}`;
  genre.style.margin = '0';
  genre.style.color = '#555';

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(year);
  card.appendChild(genre);
  container.appendChild(card);
}
