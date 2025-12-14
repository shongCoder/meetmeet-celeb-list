import React from 'react';
import './MainPage.css'
import Header from "../layout/Header.jsx";
import CelebListComponent from "../components/CelebListComponent.jsx";
import Footer from "../layout/footer.jsx";

function MainPage() {
    return (
        <>
            <div id="wrapper">
                <Header />
                <div id="contents">
                    <div className="celeb-qty">
                        <span>전체 </span>
                        <span className="qty">12명</span>
                    </div>

                    <div className="title">
                        <div>밋밋과 함께하는</div>
                        <div className="title-bold">셀럽들을 소개합니다.</div>
                    </div>

                    <div className="celeb-list">
                        <CelebListComponent />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MainPage;