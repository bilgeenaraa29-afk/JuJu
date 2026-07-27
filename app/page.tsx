import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        Тэнгэрийн продюсер
      </h1>

      <p className="text-xl text-gray-300 mb-8 text-center max-w-2xl">
        Монголын шинэ уран сайхны кино.
        <br />
        JUJU.mn сайтаар албан ёсоор үзээрэй.
      </p>

      <Link
        href="/watch"
        className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-xl font-bold"
      >
        🎬 Кино үзэх
      </Link>
    </main>
  );
}