import React, {FC} from 'react';
import { Helmet } from 'react-helmet';

import {MetaDataProps} from "./interfaces";

const MetaData:FC<MetaDataProps> = ({title, description, image}) => {
    return (
        <Helmet>
            <title>{title ? title : ''}</title>
            <meta name="description" content={description ? description : ''} />
            {image && <meta property="og:image" itemProp="image" content={image} />}
        </Helmet>
    )
}

export default MetaData;