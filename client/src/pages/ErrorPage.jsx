import React from 'react'
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PageHeader from '../components/common/PageHeader'
import FadeIn from '../components/common/FadeIn'

const ErrorPage = () => {
  const error = useRouteError()
  const isResponseError = isRouteErrorResponse(error)

  const status = isResponseError ? error.status : 500
  const title = status === 404 ? 'Page Not Found' : 'Something Went Wrong'

  const description =
    status === 404
      ? "The page you're looking for doesn't exist (or it was moved)."
      : 'An unexpected error occurred while loading this page.'

  const devDetails =
    isResponseError
      ? `${error.status} ${error.statusText || ''}`.trim()
      : error instanceof Error
        ? error.message
        : null

  return (
    <div className='bg-white min-h-screen selection:bg-[#97afbe]'>
      <Navbar />
      <main>
        <PageHeader title={title} description={description} />

        <FadeIn className='section-padding bg-white'>
          <div className='content-container'>
            <div className='mx-auto w-full max-w-3xl'>
              <p className='section-body mt-0'>
                If you need help, you can contact us or head back home.
              </p>

              <div className='mt-8 flex flex-wrap gap-3'>
                <Link to='/' className='btn-primary'>
                  Go Home
                </Link>
                <Link to='/contact' className='btn-secondary'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </main>
      <Footer />
    </div>
  )
}

export default ErrorPage