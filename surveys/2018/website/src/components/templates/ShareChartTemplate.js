import React, { Component } from 'react'
// import { graphql } from 'gatsby'
import Meta from '../elements/Meta'
// import Layout from '../common/Layout'
// import ToolHeaderBlock from '../blocks/ToolHeaderBlock'
// import ToolOpinionsOverTimeBlock from '../blocks/ToolOpinionsOverTimeBlock'
// import ReasonsBlock from '../blocks/ReasonsBlock'
// import ToolOpinionMapBlock from '../blocks/ToolOpinionMapBlock'
import withPageData from '../../helpers/withPageData'
import getImageUrl from '../../helpers/getImageUrl'
import getWording from '../../helpers/getWording'
import { Redirect } from '@reach/router'

class ShareChartTemplate extends Component {

    onComponentDidMount() {

    }

    render() {
        const { currentPage, pageContext } = this.props
        const { chart } = pageContext
        const wordingValues = currentPage.subSection && { tool: currentPage.subSection.label }
        const title = getWording('charts', chart, wordingValues)
        const description = getWording('charts', chart, wordingValues)
        const metaProperties = {
            url: `${currentPage.url}${chart}`,
            image: getImageUrl(currentPage, chart),
            title,
            description
        }
        console.log(metaProperties)
        return (
            <div className="template">
                <Meta properties={metaProperties} />
                <Redirect to={`${currentPage.path}#${chart}`} noThrow/>
                Redirecting…
            </div>
        )
    }
}

export default withPageData(ShareChartTemplate)
