import React, { useState, useEffect } from 'react';
import useAxiosPubic from '../../Hooks/useAxiosPubic';
import FeedCard from './FeedCard';

const Feed = () => {
    const axiosPublic = useAxiosPubic();
    const [corruptionPost, setCorruptionPost] = useState([]);

    // Fetch corruption posts on component mount
    useEffect(() => {
        const corruptionFatch = async () => {
            try {
                const result = await axiosPublic.get('/corruption');
                setCorruptionPost(result.data);
            } catch (error) {
                console.error('Error fetching corruption posts:', error);
            }
        };
        corruptionFatch();
    }, []); // Empty dependency array means this runs only once on mount

    return (
        <div>
            <h1>Total Corruption Posts: {corruptionPost.length}</h1>
            {/* Optionally display posts */}
            <section className='grid grid-cols-12'>
                <div className='col-span-3'>

                </div>
               <div className='col-span-6'>
               {corruptionPost.map((post, index) => <FeedCard post={post}/>)}
               </div>
               <div className='col-span-3'>

               </div>
            </section>
        </div>
    );
};

export default Feed;
