import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWriteContent } from '../../../../store/modules/write';
import ContentWrapper from '../ContentWrapper';
import { IoEarth } from 'react-icons/io5';
import { IoIosLock } from 'react-icons/io';
import styled from 'styled-components';

const SettingPublic = () => {
  const { uploadType } = useSelector(state => state.writeContent);
  const initialValue = uploadType === 2 ? [false, true] : [true, false];
  const [btnActive, setBtnActive] = useState(initialValue);
  const dispatch = useDispatch();

  const btnList = [
    {
      type: 'public-btn',
      icon: <IoEarth className='icon' />,
      text: '전체 공개',
      isActive: btnActive[0],
    },
    {
      type: 'private-btn',
      icon: <IoIosLock className='icon' />,
      text: '비공개',
      isActive: btnActive[1],
    },
  ];

  const changePublic = e => {
    const btnType = e.target.className;

    if (btnType.includes('public-btn')) {
      const changedActive = [true, false];
      setBtnActive(changedActive);
      dispatch(setWriteContent({ type: 'uploadType', value: 1 }));
    } else {
      const changedActive = [false, true];
      setBtnActive(changedActive);
      dispatch(setWriteContent({ type: 'uploadType', value: 2 }));
    }
  };

  return (
    <ContentWrapper contentTitle={'공개 설정'}>
      <SettingPublicContainer>
        <div className='btn-container'>
          {btnList.map(btn => {
            return (
              <button key={btn.type} className={btn.isActive ? `${btn.type} active` : btn.type} onClick={changePublic}>
                {btn.icon}
                <div className='text'>{btn.text}</div>
              </button>
            );
          })}
        </div>
      </SettingPublicContainer>
    </ContentWrapper>
  );
};

const SettingPublicContainer = styled.div`
  .btn-container {
    display: flex;

    button {
      display: inline-flex;
      flex: 1 1 0%;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: start;
      justify-content: flex-start;
      height: 3rem;
      padding: 0px 0px 0px 1rem;
      outline: none;
      border: 1px solid transparent;
      border-radius: 4px;
      box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px 0px;
      background: var(--bg-element7);
      color: var(--text3);
      line-height: 1.125rem;
      font-size: 1.125rem;
      font-weight: bold;

      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }

      .icon {
        font-size: 1.6rem;
        pointer-events: none;
      }

      .text {
        flex: 1 1 0%;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        pointer-events: none;
      }
    }
    .active {
      border: solid 1px var(--primary2);
      color: var(--primary2);

      &:hover {
        opacity: 1;
      }
    }

    button + button {
      margin-left: 1rem;
    }
  }
`;

export default SettingPublic;
