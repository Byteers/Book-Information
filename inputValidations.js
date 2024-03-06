export const title_validation = {
  name: 'title',
  label: 'Book Title',
  type: 'text',
  multiType: false,
  id: 'title',
  placeholder: 'Enter book title...',
  validation: {
    required: {
      value: true,
      message: 'Book title is required',
    },
    maxLength: {
      value: 100,
      message: '100 characters max',
    },
  },
}

export const author_validation = {
  name: 'author',
  label: 'Author Name',
  type: 'text',
  multiType: false,
  id: 'author',
  placeholder: 'Enter author name...',
  validation: {
    required: {
      value: true,
      message: 'Author name is required',
    },
    maxLength: {
      value: 100,
      message: '100 characters max',
    },
  },
}

export const publisher_validation = {
  name: 'publisher',
  label: 'Publisher Name',
  type: 'text',
  multiType: false,
  id: 'publisher',
  placeholder: 'Enter publisher name...',
  validation: {
    required: {
      value: true,
      message: 'Publisher name is required',
    },
    maxLength: {
      value: 100,
      message: '100 characters max',
    },
  },
}

export const published_year_validation = {
  name: 'publishedYear',
  label: 'Published Year',
  type: 'date',
  multiType: false,
  id: 'publishedYear',
  placeholder: 'Select published year...',
  validation: {
    required: {
      value: true,
      message: 'Published year is required',
    },
  },
}


export const isbn_validation = {
  name: 'isbn',
  label: 'ISBN',
  type: 'text',
  multiType: false,
  id: 'isbn',
  placeholder: 'Enter ISBN...',
  validation: {
    required: {
      value: true,
      message: 'ISBN is required',
    },
    maxLength: {
      value: 20,
      message: '20 characters max',
    },
    pattern: {
      value: /^[0-9]{10,13}$/, 
      message: 'Invalid ISBN format',
    },
  },
}

export const quantity_validation = {
  name: 'quantity',
  label: 'Quantity',
  type: 'number',
  multiType: false,
  id: 'quantity',
  placeholder: 'Enter quantity...',
  validation: {
    required: {
      value: true,
      message: 'Quantity is required',
    },
  },
}
