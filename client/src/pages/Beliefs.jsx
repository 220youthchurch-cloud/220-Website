import React from 'react'
import PageHeader from '../components/common/PageHeader'
import FadeIn from '../components/common/FadeIn'
import Quote from '../components/common/Quote'

const Beliefs = () => {
  const beliefs = [
    {
      title: 'The Trinity',
      description:
        'We believe in one God, eternally existing in three persons — Father, Son, and Holy Spirit — equal in deity, power, and glory.',
    },
    {
      title: 'The Bible',
      description:
        'We believe the 66 books of the Old and New Testaments are the inspired, inerrant, and authoritative Word of God, the final authority for all matters of faith, life, and doctrine.',
    },
    {
      title: 'Jesus Christ',
      description:
        'We believe Jesus Christ is the eternal Son of God — fully God and fully man. Conceived by the Holy Spirit, born of the virgin Mary, He lived a sinless life, died on the cross as a substitutionary sacrifice for our sins, was bodily resurrected, ascended into heaven, and will return in power and glory.',
    },
    {
      title: 'Humanity & Sin',
      description:
        'We believe all human beings are created in the image of God, yet through the fall have inherited a sinful nature — leaving every person spiritually separated from God and in need of redemption through Jesus Christ.',
    },
    {
      title: 'Man as Male and Female',
      description:
        'We believe that men and women are both made in the image of God, equal in dignity and worth before Him. Gender, designated by God through biological sex, is essential to our identity as male and female — neither incidental nor fluid. Men and women reflect and represent God in distinct and complementary ways, and these differences are to be honored and celebrated in all dimensions of life. Though the fall distorts and damages God’s design for gender, its goodness remains part of the beauty of His created order, by which we glorify Him as male and female.',
    },
    {
      title: 'Salvation',
      description:
        'We believe salvation is the free gift of God’s grace, received through repentance from sin and faith in the finished work of Jesus Christ alone — not by human works, merit, or religious observance.',
    },
    {
      title: 'The Holy Spirit',
      description:
        'We believe the Holy Spirit indwells every believer, sealing them in Christ, illuminating Scripture, empowering godly living, gifting the Church for ministry, and producing the fruit of Christlike character.',
    },
    {
      title: 'The Universal Church',
      description:
        'We believe the universal Church is the true, worshipping community of God’s people — composed of all the redeemed across all time, called out of every nation by His Word and Spirit, and purchased by the blood of Christ to form a new redeemed humanity.',
    },
    {
      title: 'The Local Church',
      description:
        'We believe the local church is the visible expression of Christ’s universal Church and the focal point of God’s plan to mature His people and save sinners. Every Christian is called to commit themselves as a member to a specific local church. A true church is marked by the faithful preaching of the Word, the right administration of the ordinances, and the proper exercise of church discipline. Though imperfect — often containing a mixture of unbelievers among the true flock and vulnerable to theological error and moral failure — Christ is unwavering in His commitment to build His church and will surely bring it to maturity.',
    },
    {
      title: 'Resurrection & Return',
      description:
        'We believe in the bodily resurrection of both the saved and the lost — the saved to eternal life with God in glory, and the lost to eternal separation from God in conscious judgment.',
    },
  ]

  return (
    <>
      <PageHeader
        title='Statement of Faith'
        description={
          <Quote
            quote="Contend for the faith that was once for all delivered to the saints."
            reference="Jude 1:3"
          />
        }
      />

      {/* Statement */}
      <FadeIn className='bg-white section-padding'>
        <div className='content-container'>
          <h2 className='section-heading text-[#10263b] mb-6'>Statement of Faith</h2>
          <p className='section-body mt-8'>
            Every leader in 220 stands on the same foundation. The doctrines articulated below are not optional
            convictions or personal preferences — they are the essential truths of the historic Christian faith that
            Gospel Light Eritrean Church believes, teaches, and confesses. As a volunteer leader, you are not asked
            to be an expert theologian, but you are asked to affirm, embody, and never undermine these truths in
            your teaching, your conversations, or your conduct. What we believe shapes what we do. What we do
            reveals what we believe.
          </p>
        </div>
      </FadeIn>

      {/* Essential Beliefs */}
      <FadeIn className='bg-[#eef4fa] section-padding'>
        <div className='content-container'>
          <h2 className='section-heading text-[#10263b] mb-10'>Essential Beliefs</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {beliefs.map((belief, index) => (
              <div key={index} className='border-l-4 border-[#2c6598] pl-6'>
                <h3 className='font-[lato] text-xl md:text-2xl font-bold text-[#10263b] mb-3'>
                  {belief.title}
                </h3>
                <p className='body-font text-base md:text-lg leading-8 text-slate-700'>
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Our Posture as Leaders */}
      <FadeIn className='bg-white section-padding'>
        <div className='content-container'>
          <h2 className='section-heading text-[#10263b] mb-6'>Our Posture as Leaders</h2>
          <p className='section-body'>
            As a 220 leader, you are not required to teach systematic theology, but you are required to live, speak,
            and serve in alignment with the convictions above. If at any point your beliefs come to differ from what
            is confessed here — whether due to study, honest doubt, or pastoral concern — we ask that you bring that
            conversation to pastoral leadership in good faith rather than teach against the church or quietly drift.
            The unity of the body and the integrity of our witness depend on it.
          </p>
        </div>
      </FadeIn>
    </>
  )
}

export default Beliefs