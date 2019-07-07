import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
              <strong>자기소개</strong><br />
                홍남명
                <br />
                도시의 시공간에 애정을 쏟고 있습니다
              </p>
              <p>
                <strong>홈페이지 소개</strong>
                <br />이 블로그는 개인의 기록을 위한 것입니다. <br />
                기록은 학교 강연과 연구팀, 스터디 등에 대한 것으로 대부분 발제문, 번역문 혹은
                노트필기입니다.
              </p>
              <p>
                <strong>구성</strong>
                <br />
                Historische Urbanistik<br />
                Historische Bauforschung und Denkmalpflege<br />
                베를린을 공부합니다(Korean Urban Research Group in Germany)<br />
                베를린 공대 한인학생회(Kostub)<br />
                건축 역사를 공부합니다(with Jinhee and quo ante)<br />
                베를린 박물관섬을 투어합니다(My Real Trip)<br />
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
