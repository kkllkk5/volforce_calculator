import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">自作ツール集</h1>
          </div>
        </header>

        <section className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-md p-8">

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/volforce_calculator" className="group block rounded-lg p-6 border border-transparent hover:border-sky-200 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">VOLFORCE計算機</h2>
                  <p className="text-sm text-slate-500">レベル・スコア情報からVOLFORCEを計算します。</p>
                </div>
              </div>
            </Link>

            <Link href="/hispeed_calculator" className="group block rounded-lg p-6 border border-transparent hover:border-indigo-200 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">HI-SPEED計算機</h2>
                  <p className="text-sm text-slate-500">ソフランにおけるHI-SPEED設定値の計算を行います。</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}