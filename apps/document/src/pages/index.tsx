import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home(): JSX.Element {
  return (
    <Layout title="홈페이지" description="AI UI 컴포넌트 라이브러리 문서">
      <main>
        <section className="py-20 text-center bg-gradient-to-b from-white to-gray-100">
          <h1 className="text-5xl font-bold mb-4">Welcome to Aicody UI</h1>
          <p className="text-lg text-gray-600">
            프론트엔드 컴포넌트 라이브러리를 위한 문서입니다.
          </p>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
