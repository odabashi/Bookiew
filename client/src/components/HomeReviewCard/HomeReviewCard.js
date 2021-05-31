import React from 'react';
import './HomeReviewCard.css';

import UserIcon from "../../assets/icons/user.png";
import { FaStar } from 'react-icons/fa';
import Comment from '../Comment/Comment';
import {useTranslation} from "react-i18next";

const HomeReviewCard = (props) => {
    const {t} = useTranslation();
    return(
        <div className='reviewCardContainer'>
            <div className='reviewCardBookThumbnailWrapper'>
                <img src={props.bookThumbnail} className='reviewCardBookThumbnail' alt='bookThumbnail'/>
            </div>
            <div className='reviewCardWrapper'>
                <div className='reviewCardBookName'>
                    <p>{props.bookName}</p>
                </div>
                <div className='reviewCardBookAuthor'>
                    <p>{props.bookAuthor}</p>
                </div>
                <div className='reviewCardBreaklineContainer' >
                    <hr className='reviewCardBreakline' />
                </div>
                <div className='reviewCardReviewerContainer'>
                    <div className='reviewCardReviewerWrapper'>
                        <div className='reviewCardReviewerIconWrapper'>
                            <img src={props.reviewerIcon} className='reviewCardReviewerIcon' alt='reviewer'/>
                        </div>
                        <div className='reviewCardReviewerName'>{props.reviewerName}</div>
                    </div>
                    <div className='reviewCardReviewDate'>
                        {t('home_review_card.pub_on')}{props.reviewDate}
                    </div>
                </div>
                <div className='reviewCardReviewText'>
                    <p>{props.reviewText}</p>
                </div>
                <div className='reviewCardRatingCommentSection'>
                    {props.reviewComments !== null ?
                        <div className='reviewCardShowCommentsWrapper'>
                            <p className='reviewCardLabel'>{t('home_review_card.comments')}&nbsp; {props.reviewCommentsNumber}</p>
                        </div>
                        : null
                    }
                    <div className='reviewCardRatingWrapper'>
                        <p className='reviewCardLabel'>{props.reviewRating}</p>
                        <FaStar className="reviewCardStar"
                                color="#ffc107" 
                                size={24}/>
                    </div>
                </div>
                {props.reviewComments !== null ? 
                    <div className='reviewCardCommentsContainer'>
                        {props.reviewComments.map((comment, index) => {
                            return (
                                <Comment    key={comment.index}
                                            commenterIcon={(comment.commenterIcon === '' || typeof(comment.commenterIcon) === 'undefined') ? UserIcon : comment.commenterIcon}
                                            commenterName={comment.commenterName}
                                            commentDate={comment.commentDate}
                                            commentText={comment.commentText}
                                            />
                            );
                        })}
                    </div>
                    :
                    null}
            </div>
            
        </div>
    );
}

export default HomeReviewCard;