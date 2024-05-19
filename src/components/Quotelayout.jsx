import React, { useEffect, useState } from 'react';
import axios from 'axios';
import refresh from './images/refreshicon.png';
import copy from './images/copy.png';
import './Quotelayout.css';
import twitter from './images/twitter.jpg';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';

export const Quotelayout = () => {
    const [response, setresponse] = useState({
        quote: "finding a Quote .......",
        author: "quotify"
    });
    const [isLoading, setLoading] = useState(false);

    const getQuote = async () => {
        setLoading(true);
        try {
            await fetch('https://dummyjson.com/quotes/random')
                .then((res) => res.json())
                .then((data) => setresponse(data))
                .catch((err) => { console.log(err) })
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => getQuote, []);

    const copyQuote = (response) => {
        navigator.clipboard.writeText(response.quote + "   - " + response.author);
    }

    const twitterRedirect = (response) => {
        window.open(`https://twitter.com/intent/tweet?text=${response.quote}  - ${response.author}`);
    }

    return (
        <div>
            <div className='quotebox'>
                <div className='container'>

                    {isLoading ?
                        <Box sx={{ width: '99%' }} >
                            <LinearProgress color='secondary' />
                        </Box>
                        : null
                    }
                    <div className='quote'>{response.quote}</div>
                    <div className='author'>{"-  " + response.author}</div>
                    <hr style={{ width: '90%' }}></hr>
                    <div className='refreshbox'>
                        <img className='twitter' onClick={() => twitterRedirect(response)} src={twitter} />
                        <div style={{ paddingTop: '10px' }}>
                            <img className='copy' onClick={() => copyQuote(response)} src={copy} />
                            <img className='refresh' src={refresh} onClick={getQuote}></img>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
