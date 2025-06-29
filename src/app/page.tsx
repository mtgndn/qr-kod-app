import QRCodeGenerator from '../components/QRCodeGenerator';

export default function Home() {
  return (
    <main className="text-black min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center px-4">
      <QRCodeGenerator />
    </main>
  );
}
