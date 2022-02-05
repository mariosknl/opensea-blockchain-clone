import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'fm4c7jjk',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skAB2joinP3H2Iq9MCZD4fTIkxRMKApB83GOd3XTmQBXpGVDoFs1LhAhs9ddsG3l6Cl9g8fNbM2HvBDgO9vnxNfX7Vz9id6o1kcKtZAoCCFaoYsJE3WqtL3ZwTDLoBRlp8QXz0Sw1FlqtRKNB5W7ZRO3hkDw9FqeSmzw9fZUpMBpO0ENLwl0',
  useCdn: false,
})
