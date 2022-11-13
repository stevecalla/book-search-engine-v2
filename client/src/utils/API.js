// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  // return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    // `https://www.googleapis.com/books/v1/volumes?q=${query}&&orderBy=newest&startIndex=0&maxResults=10`
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`
  );
};
