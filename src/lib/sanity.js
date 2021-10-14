import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

import {
	SANITY_PROJECT_ID,
	SANITY_DATASET,
} from '$lib/env'

const client = sanityClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: '2021-10-06',
	useCdn: true,
})

export default client

const builder = imageUrlBuilder(client)

export function urlFor(source) {
	return builder.image(source)
}
