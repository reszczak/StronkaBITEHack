/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import React from 'react';
import Redirect404 from '../StronkaBITEHack/src/components/redirect404';

export const wrapPageElement = ({ element }) => {
    return (
        <>
            {element}
            <Redirect404 />
        </>
    );
};
