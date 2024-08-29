import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: relative;
  padding: 5% 20% 4.5%;
  background: var(--color-fff);
  p {
    font-weight: 300;
    font-size: 12px;
    text-align: center;
    line-height: 1.4;
  }
  @media (min-width: 768px) {
    padding: 30px 0 25px;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
        <p>이 사이트는 상업적인 용도로 제작된 것이 아닌 개인 포트폴리오 사이트입니다.</p>
        <p>Copyright 2024. KIMSOHEE</p>
    </FooterWrapper>
  )
}

export default Footer;