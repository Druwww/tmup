import React from 'react';

import {Image} from '@mantine/core';
import {useSpring, animated} from "react-spring";

interface ImageBandeauParams {
    src : string,
    alt : string,
}

function ImageBandeau(props: ImageBandeauParams) {

    return (
        <React.Fragment>
                <Image
                    radius="md"
                    src={props.src}
                    alt={props.alt}
                    height={175}
                />
        </React.Fragment>
    );
}

export default ImageBandeau;