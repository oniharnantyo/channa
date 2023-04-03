import Image from 'next/image';

import { HtmlableContent } from '@components/Atoms/Content';
import { Title } from '@components/Atoms/Title';
import clsx from 'clsx';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { SectionNoTitle } from '../Section';

const posterLink =
  'https://res.cloudinary.com/vidyasena-prod/image/upload/v1680502521/Assets/poster-donasi-renov.webp';

const content = `
Namo Buddhaya 🙏 </br>

Kami segenap Panitia Renovasi membuka kesempatan sebesar-besarnya kepada Bapak/Ibu, Saudara/i, Umat, dan Dermawan untuk melakukan kebajikan berdana dalam proyek Renovasi Vihāra Vidyāloka Yogyakarta tahun 2023.</br>
</br>
Tujuan pelaksanaan proyek renovasi ini adalah untuk memperbaiki kerusakan yang terjadi pada bangunan Vihāra Vidyāloka secara keseluruhan guna menfasilitasi kegiatan rohani umat Buddha di wilayah D.I. Yogyakarta dalam rangka mempraktikkan Dhamma tanpa terkendala.</br>
</br>
Bagi Bapak/Ibu, Saudara/i, Umat, dan Dermawan yang ingin berdonasi dapat mentransfer melalui rekening :</br>
🏦 BCA : 0600039326 (a.n. Ian Pasani)</br>
- Catatan : Tambahkan kode donasi "10" di akhir nominal (Contoh: Rp100.010,00)</br>
- Keterangan : Renovasi Vidyaloka</br>
</br>
🗓️ Periode Open Donasi Renovasi berlaku mulai : 01 APRIL s.d. 31 MEI 2023</br>
📍 Link Proposal Renovasi :</br>
<a href="http://s.id/RenovasiVidyalokaYK2023" target="_blank">http://s.id/RenovasiVidyalokaYK2023</a></br>
</br>
Konfirmasi dana dapat menghubungi kontak Narahubung (CP) :</br>
<a href="https://wa.me/+628989313844" target="_blank">📲 wa.me/+628989313844 (Lala)</a></br>
</br>
Semoga kebajikan yang telah diberikan Bapak/Ibu, Saudara/i, Umat, dan Dermawan senantiasa membawa berkah, kebahagiaan, kemakmuran, dan kesejahteraan.</br>
</br>
Anumodana,</br>
Panitia Renovasi Vihāra Vidyāloka Yogyakarta.</br>
`;

const Renovation = () => {
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <Row>
      <Col lg={2} />
      <Col lg={8}>
        <SectionNoTitle>
          <Row className="mb-3 text-center">
            <Title title="Dana Renovasi Bangunan Vihāra Vidyāloka"></Title>
          </Row>
          <Row className="mb-3">
            <Col sm={12} md={12} lg={12} className="mx-auto">
              <Image
                src={posterLink}
                alt="poster dana renovasi vihara vidyaloka"
                width="300"
                height="200"
                layout="responsive"
                objectFit="contain"
                onLoadingComplete={() => setImageLoading(false)}
                className={clsx({
                  ['placeholder bg-muted placeholder-glow']: isImageLoading,
                })}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <HtmlableContent content={content}></HtmlableContent>
            </Col>
          </Row>
        </SectionNoTitle>
      </Col>
      <Col lg={2} />
    </Row>
  );
};

export default Renovation;
