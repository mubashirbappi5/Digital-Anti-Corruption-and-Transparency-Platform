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
            <ul>
                {corruptionPost.map((post, index) => <FeedCard post={post}/>)}
            </ul>
        </div>
    );
};

export default Feed;
