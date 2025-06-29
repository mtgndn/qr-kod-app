'use client';
import { useState } from 'react';
import QRCode from 'qrcode';
import Image from 'next/image';

export default function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = async () => {
    if (!text) return;
    try {
      const url = await QRCode.toDataURL(text);
      setQrCodeUrl(url);
    } catch (err) {
      console.error('QR kod oluşturulamadı:', err);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        QR Kod Oluştur
      </h2>
      <input
        type="text"
        placeholder="Bir bağlantı veya metin girin"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <button
        onClick={generateQRCode}
        className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition"
      >
        QR Kod Oluştur
      </button>

      {qrCodeUrl && (
        <div className="mt-6 text-center">
          <Image
            src={qrCodeUrl}
            alt="QR Kodu"
            width={192}
            height={192}
            className="mx-auto"
            unoptimized
          />
          <a
            href={qrCodeUrl}
            download="qr-kod.png"
            className="mt-4 inline-block text-blue-600 underline hover:text-blue-800"
          >
            QR Kodunu İndir
          </a>
        </div>
      )}
    </div>
  );
}
