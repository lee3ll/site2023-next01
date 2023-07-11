import Image from "next/image";
import React from "react";

const Member = (props) => {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>멥버 소개</h3>
      <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.</p>
      <div className="member__inner container">
        <div className="member">
          <figure className="member__header">
            <Image
              width={409}
              height={575}
              src="/assets/images/member/memberPic01.jpg"
              alt="이미지"
            />
          </figure>
          <div className="member__body">
            <h4>웹쓰 24기</h4>
            <a href="#" className="btn">
              포폴보기
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <Image
              width={409}
              height={575}
              src="/assets/images/member/memberPic02.jpg"
              alt="이미지"
            />
          </figure>
          <div className="member__body">
            <h4>웹쓰 24기</h4>
            <a href="#" className="btn">
              포폴보기
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <Image
              width={409}
              height={575}
              src="/assets/images/member/memberPic03.jpg"
              alt="이미지"
            />
          </figure>
          <div className="member__body">
            <h4>웹쓰 24기</h4>
            <a href="#" className="btn">
              포폴보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
