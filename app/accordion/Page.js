import Accordion from '@/src/components/accrodion/Accordion'
import MapAccordion from '@/src/components/accrodion/MapAccordion'
import CommonButton from '@/src/components/common/CommonButton'
import React from 'react'

const Page = () => {
    return (
        <div>
            <CommonButton />
            <MapAccordion />
            <Accordion />
        </div>
    )
}

export default Page