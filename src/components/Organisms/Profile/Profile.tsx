import { Content } from '@components/Atoms/Content';
import { Title } from '@components/Atoms/Title';
import { Col, Row } from 'react-bootstrap';

import { SectionNoTitle } from '../Section';

const Profile = () => {
  return (
    <SectionNoTitle variant="white">
      <Row>
        <Title title="Profil" isCenterAlign />
      </Row>
      <Row>
        <Col md={2} />
        <Col>
          <Content>
            <p>
              Vidyāsenā merupakan salah satu organisasi mahasiswa dan pelajar Buddhis Indonesia yang
              berada di Vihāra Vidyāloka Yogyakarta. <b>"Vidya"</b> berarti pengetahuan Dhamma dan{' '}
              <b>"Sena"</b> berarti prajurit atau tentara penjaga, sehingga Vidyāsenā berarti
              Prajurit pengetahuan Dhamma.
            </p>
            <h2 className="fw-bold text-center" style={{ fontSize: '1.75rem' }}>
              Tujuan
            </h2>
            <ul>
              <li>
                Menggali dan Memelihara Buddha Dhamma berdasarkan kitab suci Tipitaka Pali, serta
                memberikan pembinaan kepada pelajar, mahasiswa, dan generasi Buddhis di Yogyakarta
                pada khususnya dan di Indonesia umumnya
              </li>
              <li>Membentuk Dhammaduta yang mempunyai kompetensi dalam pembabaran Dhamma</li>
              <li>
                Membina, meningkatkan, dan mengembangkan kepribadain sera kemampuan anggota dalam
                berorganisasi
              </li>
              <li>Memberikan sumbangsih dalam meningkatkan moral dan kesejahteraan masyarakat</li>
            </ul>
          </Content>
        </Col>
        <Col md={2} />
      </Row>
    </SectionNoTitle>
  );
};

export default Profile;
