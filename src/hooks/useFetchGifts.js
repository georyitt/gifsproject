import {useEffect, useState} from "react";
import {getFetchGifs} from "../helpers/getFetchGifts";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getFetchGifs( category )
            .then( images => {

                setTimeout( () => {
                    setState({
                        data: images,
                        loading: false
                    })
                }, 3000);

            });
        }, [ category ]
    );

    return state;
}