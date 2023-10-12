import React from 'react';
import Header from './Header'; // Impor komponen Header dari file terpisah
import Footer from './Footer'; // Impor komponen Footer dari file terpisah

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Konten Utama</h2>
        {/* Tambahkan konten utama aplikasi di sini */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
