import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from '../../../services/players';

import Reviewer from './Reviewer';

import { FaStar } from 'react-icons/fa';

import './ReviewList.css';

const ReviewList = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState();

    useEffect(() => {
        (async () => {
            const fetchReviews = await getReviews(id);

            setReviews(fetchReviews);
        })();
    }, [id]);

    return reviews ? (
        <div className="reviews-recd">
            <div className="reviews-title">Reviews</div>
            {reviews &&
                reviews.map((review) => (
                    <div className="profile-review" key={review.id}>
                        <div className="profile-review-rating">
                            {[...Array(review.rating)].map((e, i) => (
                                <div key={i}>
                                    <FaStar />
                                </div>
                            ))}
                        </div>
                        <div className="profile-review-comment">
                            "{review.comment}"
                        </div>
                        <div className="profile-review-reviewer">
                            <Reviewer id={review.reviewer} />
                        </div>
                    </div>
                ))}
        </div>
    ) : null;
};

export default ReviewList;
