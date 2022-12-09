import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDetailData } from '../../store/modules/detailPage';
import { useLocation } from 'react-router-dom';
import { apiClient } from '../../api';
import { toast } from 'react-toastify';
import PostArea from './PostArea';
import NextPrePost from './NextPrePost';
import CommentArea from './CommentArea';
import InterestingPost from './InterestingPost';
import Toastify from '../../components/Toastify';
import styled from 'styled-components';

const DetailPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { postData, commentsData } = useSelector(state => state.detailData);

  useEffect(() => {
    (async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        };
        const { data } = await apiClient.get(`${location.pathname}`, config);
        dispatch(setDetailData(data));
      } catch (error) {
        toast.error('게시글을 불러오지 못했습니다.');
        console.log('detail data error => ', error);
      }
    })();
  }, [location.pathname]);

  return (
    <>
      <Toastify />
      {postData && (
        <>
          <DetailPageContainer>
            <PostArea postData={postData} />
            <NextPrePost postData={postData} />
            <CommentArea postData={postData} />
          </DetailPageContainer>
          <InterestingPost interestingPostData={postData.interested} />
        </>
      )}
    </>
  );
};

const DetailPageContainer = styled.div`
  width: 768px;
  margin: 0 auto;
  padding-bottom: 4rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;

export default DetailPage;
