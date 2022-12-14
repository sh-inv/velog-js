import styled from 'styled-components';
import Title from './Title';
import SocialInfo from './SocialInfo';
import Email from './Email';
import EmailReceiveSetting from './EmailReceiveSetting';
import Withdrawal from './Withdrawal';
import { UserContentsMaxWidth768px, UserContentsBoxMaxWidth768px, UserContentsTitleMaxWidth768px } from '../../../styles/media';

const UserInfo = () => {
  const infoData = [
    { id: 1, title: '롤로그 제목', component: <Title />, description: '개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.' },
    { id: 2, title: '소셜 정보', component: <SocialInfo />, description: '포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.' },
    { id: 3, title: '이메일 주소', component: <Email />, description: '회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.' },
    {
      id: 4,
      title: '이메일 수신 설정',
      component: <EmailReceiveSetting />,
    },
    { id: 5, title: '회원 탈퇴', component: <Withdrawal />, description: '탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.' },
  ];

  return (
    <UserInformationContainer>
      {infoData.map(info => {
        return (
          <div key={info.id} className='contents-box'>
            <div className='wrapper'>
              <div className='title-wrapper'>
                <h3>{info.title}</h3>
              </div>
              <div className='interval'>{info.component}</div>
            </div>
            {info.id === 4 ? null : <div className='desc'>{info.description}</div>}
          </div>
        );
      })}
    </UserInformationContainer>
  );
};

const UserInformationContainer = styled.section`
  margin-top: 4rem;

  ${UserContentsMaxWidth768px};

  .contents-box {
    padding-top: 1rem;
    padding-bottom: 1rem;

    .wrapper {
      display: flex;

      ${UserContentsBoxMaxWidth768px};

      .title-wrapper {
        width: 9.5rem;
        flex-shrink: 0;

        h3 {
          margin: 0px;
          line-height: 1.5;
          font-size: 1.125rem;

          ${UserContentsTitleMaxWidth768px};
        }
      }

      .interval {
        flex: 1 1 0%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
      }
    }

    .desc {
      margin-top: 0.875rem;
      color: var(--text3);
      font-size: 0.875rem;
    }
  }

  .contents-box + .contents-box {
    border-top: 1px solid var(--border4);
  }
`;

export default UserInfo;
