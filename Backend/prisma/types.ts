export const fieldTypes: Record<string, Record<string, 'string' | 'number' | 'boolean' | 'date'>> = {
  user: {
    id: 'number',
    firstname: 'string',
    lastname: 'string',
    email: 'string',
    description: 'string',
    password: 'string',
    image: 'string',
    refreshToken: 'string',
    isActive: 'boolean'
  },
  product: {
    id: 'number',
    name: 'string',
    slug: 'string',
    image: 'string',
    description: 'string',
    price: 'number',
    stock: 'number',
    isActive: 'boolean',
    createdAt: 'date'
  },
  review: {
    id: 'number',
    title: 'string',
    comment: 'string',
    numStars: 'number',
    productId: 'number',
    userId: 'number',
    isActive: 'boolean',
    createdAt: 'date',
    updatedAt: 'date'
  },
  favorite: {
    id: 'number',
    productId: 'number',
    userId: 'number'
  }
};