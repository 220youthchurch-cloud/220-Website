import React from 'react'
import PageHeader from '../common/PageHeader'
import FadeIn from '../common/FadeIn'

const MissionVision = () => {
  const fourTruths = [
    {
      title: '“I have been crucified with Christ.”',
      description:
        'The old self is dead. The performance, the image, the striving, the shame, the past — nailed to the cross with Him. We are not who we used to be.',
      icon: '1',
    },
    {
      title: '“It is no longer I who live, but Christ who lives in me.”',
      description:
        'The Christian life is not self-improvement. It is Christ Himself — alive in us, transforming us from the inside. Our center has been replaced.',
      icon: '2',
    },
    {
      title: '“The life I now live in the flesh I live by faith.”',
      description:
        'We do not live by feelings, by appearances, or by the opinions of others. We live by daily, dependent trust in the Son of God.',
      icon: '3',
    },
    {
      title: '“He loved me and gave Himself for me.”',
      description:
        'Everything we do flows from this. Not duty. Not religion. Love that bled. Love that conquered. Love that called us by name.',
      icon: '4',
    },
  ]

  return (
    <>
      <PageHeader
        title='Mission & Vision'
        description='220 exists to tell this generation another story: their identity is in Christ. He defines them. He chose them. He paid for them. He lives in them.'
      />

      {/* Mission Statement */}
      <FadeIn className='bg-white p-8 md:py-10'>
        <article className='grid w-full md:grid-cols-2'>
          <div className='md:order-1 min-h-80 md:min-h-120'>
            <img
              src='/misc/img1.jpg'
              alt='Our Mission'
              className='h-full w-full object-cover'
              loading='lazy'
            />
          </div>

          <div className='md:order-2 flex min-h-80 items-center justify-center p-8 text-center md:min-h-120 md:p-14'>
            <div className='max-w-2xl'>
              <h2 className='section-heading text-[#10263b]'>Our Mission</h2>
              <p className='section-body'>
                220 is the Youth & Young Adults Ministry of Gospel Light Eritrean Church. Our name is drawn from Galatians 2:20 — a single verse that captures everything this ministry exists to proclaim: identity, death to self, the indwelling Christ, a life lived by faith, and a Savior who loved us and gave Himself for us.
              </p>
              <p className='section-body mt-6'>
                We did not pick this name because it sounded clever. We picked it because it tells the truth about who we are and who we want every young person under our care to become.
              </p>
            </div>
          </div>
        </article>
      </FadeIn>

      {/* Vision Statement */}
      <FadeIn className='bg-[#eef4fa] p-8 md:py-10'>
        <article className='grid w-full md:grid-cols-2'>
          <div className='md:order-2 min-h-80 md:min-h-120'>
            <img
              src='/misc/img8.jpg'
              alt='Our Vision'
              className='h-full w-full object-cover'
              loading='lazy'
            />
          </div>

          <div className='md:order-1 flex min-h-80 items-center justify-center p-8 text-center md:min-h-120 md:p-14'>
            <div className='max-w-2xl'>
              <h2 className='section-heading text-[#10263b]'>Our Vision</h2>
              <p className='section-body'>
                This generation is being told a thousand stories about who they are. They hear that their identity is in their performance, their followers, their grades, their relationships, their bodies, their ethnicity, their sexuality, their image. They are exhausted from carrying identities that were never meant to be theirs.
              </p>
              <p className='section-body mt-6'>
                220 exists to tell them another story. Their identity is in Christ. He defines them. He chose them. He paid for them. He lives in them. Nothing in heaven or on earth can take that from them — not failure, not family pressure, not cultural expectations, not the cruelty of the internet, not even their own sin.
              </p>
              <p className='section-body mt-6'>
                As a leader in 220, your first calling is not to teach this truth. It is to live it. Young people will believe what you embody long before they believe what you say. When they look at you, they should see a life that has been crucified with Christ — a life that no longer revolves around itself. That is the calling. That is what we are inviting them into.
              </p>
            </div>
          </div>
        </article>
      </FadeIn>

      {/* Core Values */}
      <FadeIn className='bg-white p-8 md:py-10'>
        <div className='content-container'>
          <h2 className='section-heading text-center text-[#10263b] mb-12'>Four Truths Behind the Name</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {fourTruths.map((truth) => (
              <div key={truth.icon} className='text-center'>
                <div className='mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2c6598] text-white'>
                  <span className='text-2xl font-bold'>{truth.icon}</span>
                </div>
                <h3 className='section-heading text-lg text-[#10263b] mb-3'>{truth.title}</h3>
                <p className='section-body'>{truth.description}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default MissionVision