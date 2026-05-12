import React from 'react'
import PageHeader from '../common/PageHeader'
import Quote from '../common/Quote'
import FadeIn from '../common/FadeIn'

const WhatIs220 = () => {
  const sections = [
    {
      title: 'The Heart of Our Name',
      image: '/misc/img9.jpg',
      description:
        '220 is the name of the Youth & Young Adults Ministry of Gospel Light Eritrean Church. Our name is drawn from Galatians 2:20 — a single verse that captures everything this ministry exists to proclaim: identity, death to self, the indwelling Christ, a life lived by faith, and a Savior who loved us and gave Himself for us. We did not pick this name because it sounded clever. We picked it because it tells the truth about who we are and who we want every young person under our care to become.',
      backgroundColor: 'bg-white',
    },
    {
      title: 'Four Truths Behind the Name',
      image: '/misc/img5.jpg',
      description: (
        <ol className="list-decimal space-y-4 pl-4">
          <li><strong>“I have been crucified with Christ.”</strong> The old self is dead. The performance, the image, the striving, the shame, the past — nailed to the cross with Him. We are not who we used to be.</li>
          <li><strong>“It is no longer I who live, but Christ who lives in me.”</strong> The Christian life is not self-improvement. It is Christ Himself — alive in us, transforming us from the inside. Our center has been replaced.</li>
          <li><strong>“The life I now live in the flesh I live by faith.”</strong> We do not live by feelings, by appearances, or by the opinions of others. We live by daily, dependent trust in the Son of God.</li>
          <li><strong>“He loved me and gave Himself for me.”</strong> Everything we do flows from this. Not duty. Not religion. Love that bled. Love that conquered. Love that called us by name.</li>
        </ol>
      ),
      backgroundColor: 'bg-[#eef4fa]',
    },
    {
      title: 'Why This Generation Needs This Truth',
      image: '/misc/img13.jpg',
      description: (
        <div className="space-y-4">
          <p>This generation is being told a thousand stories about who they are. They hear that their identity is in their performance, their followers, their grades, their relationships, their bodies, their ethnicity, their sexuality, their image. They are exhausted from carrying identities that were never meant to be theirs.</p>
          <p>220 exists to tell them another story. Their identity is in Christ. He defines them. He chose them. He paid for them. He lives in them. Nothing in heaven or on earth can take that from them — not failure, not family pressure, not cultural expectations, not the cruelty of the internet, not even their own sin.</p>
          <p>As a leader in 220, your first calling is not to teach this truth. It is to live it. Young people will believe what you embody long before they believe what you say. When they look at you, they should see a life that has been crucified with Christ — a life that no longer revolves around itself. That is the calling. That is what we are inviting them into. That is 220.</p>
        </div>
      ),
      backgroundColor: 'bg-white',
    },
  ]

  return (
    <>
      <PageHeader
        title='What is 220?'
        description={
          <Quote
            quote="I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me."
            reference="Galatians 2:20"
          />
        }
      />

      <div className='w-full'>
        {sections.map((section, index) => (
          <FadeIn key={section.title} className={`${section.backgroundColor} p-8 md:py-10`}>
            <article className='grid w-full md:grid-cols-2'>
              <div className={`${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'} min-h-80 md:min-h-120`}>
                <img
                  src={section.image}
                  alt={section.title}
                  className='h-full w-full object-cover'
                  loading='lazy'
                />
              </div>

              <div className={`${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'} flex min-h-80 items-center justify-center p-8 text-center md:min-h-120 md:p-14`}>
                <div className='max-w-2xl'>
                  <h2 className='section-heading text-[#10263b]'>{section.title}</h2>
                  <div className='section-body'>{section.description}</div>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </>
  )
}

export default WhatIs220