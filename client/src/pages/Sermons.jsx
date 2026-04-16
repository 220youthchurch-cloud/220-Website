import React from 'react'
import PageHeader from '../components/common/PageHeader'
import RecentSermons from '../components/sermons/RecentSermons'

const Sermons = () => {
  return (
    <>
      <PageHeader
        title='Sermons'
        description='Watch recent messages, grow in the Word, and revisit teachings that encourage faith and daily discipleship.'
      />

      <RecentSermons />
    </>
  )
}

export default Sermons