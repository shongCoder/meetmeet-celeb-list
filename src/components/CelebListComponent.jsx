import React, {use, useState} from 'react';
import './CelebListComponent.css'
import CelebImg01 from '/img/celeb/celebrity-01.png'
import CelebImg02 from '/img/celeb/celebrity-02.png'
import CelebImg03 from '/img/celeb/celebrity-03.png'
import CelebImg04 from '/img/celeb/celebrity-04.png'

import VerifyIcon from '/img/icon/verify.svg'
import PaidIcon from '/img/icon/paid.svg'
import KoreaIcon from '/img/icon/korea.svg'
import CelebDetailComponent from "./CelebDetailComponent.jsx";

function CelebListComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [celebInfo, setCelebInfo] = useState(null);

    const handleClickCeleb = (celeb) => {
        setCelebInfo({
            nickname: celeb.nickname,
            bgImage: celeb.bgImage,
            age: celeb.age,
        });
        setIsOpen(true);
    };

    /* 더미 데이터 */
    const celebImages = [
        CelebImg01,
        CelebImg02,
        CelebImg03,
        CelebImg04,
    ];

    const celebList = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        nickname: `귤귤무슨귤${i + 1}`,
        country: '대한민국',
        age: 20 + (i % 5),
        bgImage: celebImages[i % celebImages.length], // 1~4 반복
        isOnline: i % 2 === 0,
        isVerified: i % 3 === 0,
        isPaid: i % 4 === 0,
    }));

    return (
        <>
            {isOpen ? (
                <CelebDetailComponent isOpen={isOpen} onClose={() => setIsOpen(false)} info={celebInfo} />
            ):(
                <ul>
                    {celebList.map((celeb) => (
                        <li
                            key={celeb.id}
                            style={{ backgroundImage: `url(${celeb.bgImage})` }}
                            onClick={() => handleClickCeleb(celeb)}
                        >
                            <div className="box-content">
                                <div></div>

                                <div className="celeb-profile">
                                    {/*<div className="celeb-name">*/}
                                    {/*    {celeb.isOnline && <div className="online"></div>}*/}

                                    {/*    <span className="nick-name">{celeb.nickname}</span>*/}

                                    {/*    {celeb.isVerified && (*/}
                                    {/*        <img src={VerifyIcon} alt="verify icon" />*/}
                                    {/*    )}*/}

                                    {/*    {celeb.isPaid && (*/}
                                    {/*        <img src={PaidIcon} alt="paid icon" />*/}
                                    {/*    )}*/}
                                    {/*</div>*/}

                                    {/*<div className="celeb-info">*/}
                                    {/*    <img src={KoreaIcon} alt="korea icon" />*/}
                                    {/*    <span className="region">{celeb.country}</span>*/}
                                    {/*    <span className="dot">・</span>*/}
                                    {/*    <span className="age">{celeb.age}</span>*/}
                                    {/*</div>*/}
                                </div>
                            </div>

                            {/*<div className="overlay"></div>*/}
                        </li>
                    ))}
                </ul>
            )}

        </>
    );
}

export default CelebListComponent;