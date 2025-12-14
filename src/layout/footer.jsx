import React, {useState} from 'react';
import './Footer.css'
import Logo from '/img/footer-logo.svg'
import ArrowDown from '/img/icon/arrow-down.svg'

function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleInfo = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <footer>
                <img src={Logo} alt="logo" />
                <div className="contact-box">
                    <span>궁금한 내용이 있으신가요?</span>
                    <button>이메일 문의하기</button>
                </div>
                <div className="info">
                    <div className="prod" onClick={toggleInfo}>
                        <span>(주)신아국제교류센터한국지사</span>
                        <img
                            src={ArrowDown}
                            alt="arrow-down"
                            className={`arrow ${isOpen ? "open" : ""}`}
                        />
                    </div>

                    <div className={`info-detail ${isOpen ? "open" : ""}`}>
                        <div className="company-info">
                            <div className="line">
                                대표 : 황성연
                                <span className="gap" />
                                사업자 등록번호 : 126-86-35315
                            </div>
                            <div className="line">
                                주소 : 경기도 광주시 문형산길 93, 202-에이8호
                            </div>
                            <div className="line">
                                이메일 : meetmeet.help@gmail.com
                            </div>
                            <div className="line">
                                상담전화 : 070-000-0000
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div>
                        Copyright © <span>meetmeet.</span> All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;