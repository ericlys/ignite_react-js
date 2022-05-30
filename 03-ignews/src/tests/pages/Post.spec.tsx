import { render, screen } from '@testing-library/react'
import { mocked } from 'jest-mock';
import { getSession } from 'next-auth/react';
import Post, { getServerSideProps } from '../../pages/posts/[slug]'
import { getPrismicClient } from '../../services/prismic';

const post = {
  slug: 'my-new-post', 
  title: 'My New Post', 
  content: '<p>Post excerpt</p>', 
  updatedAt: '10 de Abril'
};

jest.mock('next-auth/react')
jest.mock('../../services/prismic')

describe('Post page', () => {
  it('renders correctly', () => {

    render(<Post post={post} />)

    expect(screen.getByText("My New Post")).toBeInTheDocument()
    expect(screen.getByText("Post excerpt")).toBeInTheDocument()
  })

  it('redirects user if no subscription is found', async () => {
    const getSessionMocked = mocked(getSession)

    // getSessionMocked.mockReturnValueOnce({
    //   activeSubscription: null,
    // } as any)

    getSessionMocked.mockReturnValueOnce(null)

    const response = await getServerSideProps({ 
      params: {slug: 'my-new-post'
    }} as any)

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
            destination: '/',
        })

      })
    )
  })

  it('load initial data', async () => {
    const getSessionMocked = mocked(getSession)

    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            { type: 'heading', text: 'My new post'}
          ],
          content: [
            { type: 'paragraph', text: 'Post content'}
          ]
        },
        last_publication_date: '05-26-2022'
      })
    }as any)

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: 'fake-active-subscription'
    }as any)

    const response = await getServerSideProps({
      params: {slug: 'my-new-post'}
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My new post',
            content: '<p>Post content</p>',
            updatedAt: '26 de maio de 2022'
          }
        }

      })
    )
  })
})