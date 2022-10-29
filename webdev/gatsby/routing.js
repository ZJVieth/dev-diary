/**
 * # Page routing in Gatsby Projects
 * <[gatsby <[react <[routing <[pages
 * <°Code example for routing in gatsby projects.°>
 * [https://www.gatsbyjs.com/docs/reference/routing/creating-routes/]
 * [https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/]
 * 
 * For each page, create a corresponding js file in the srg/pages
 * folder. For each page, also export a header.
 */


import React from 'react'
import { Link, navigate } from 'gatsby'
import Seo from './Seo'


const IndexPage = () => {



    return (
        <div>
            {/* Using the Link component */}
            <Link
                to="/page2"
                activeStyle={{ color: "lightgrey" }}
                activeClassName="navItemActive"
                partiallyActive={true}
            >
                Link to Page 2
            </Link>

            {/* Using navigate helper function */}
            <button
                onClick={() => navigate("/page3")}
            >
                Link to Page 3
            </button>

            <button
                onClick={() => navigate(-1)}
            >
                Back to the last page
            </button>
        </div>
    )
}

export const Head = () => <Seo title="Index Page" />
export default IndexPage