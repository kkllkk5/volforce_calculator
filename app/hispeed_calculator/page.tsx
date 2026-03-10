'use client'
import { useState } from 'react'

export default function Hispeed_Calculator_Page() {
    const [form, setForm] = useState({
        level: '',
        bpm: '',
        baseSpeed: '',
        multiplier: '',
        target: '',
        note: ''
    })
    const [result, setResult] = useState<string | null>(null)

    const handleChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [key]: e.target.value }))
    }

    const handleRun = () => {
        // 簡易的な例: 基本速度 * 倍率 を計算して表示
        const base = parseFloat(form.baseSpeed || '0')
        const mul = parseFloat(form.multiplier || '0')
        if (!isFinite(base) || !isFinite(mul)) {
            setResult('数値を入力してください')
            return
        }
        const calc = (base * mul).toFixed(2)
        setResult(`計算結果: ${calc} （基本速度 ${base} × 倍率 ${mul}）`)
        console.log('実行:', { ...form, calc })
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-6 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <header className="mb-6">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">HI-SPEED 計算機</h1>
                    <p className="text-sm text-slate-500">ソフランにおけるHI-SPEED設定の目安表</p>
                </header>

                <section className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">カスタム入力</h2>
                            <p className="text-sm text-slate-500">以下に譜面情報を入力して「実行」を押してください。</p>
                        </div>
                    </div>

                    <div className="mt-2 grid gap-4">
                        <div className="text-sm text-slate-600">
                            目安が必要な場合はトップページの推奨表や過去の設定を参照してください。ここでは直接計算できるカスタム入力を用意しています。
                        </div>
                    </div>

                    {/* 横2列 × 縦3行 の入力グリッド */}
                    <div className="mt-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-xs text-slate-600 mb-1">レベル</label>
                                <input value={form.level} onChange={handleChange('level')} className="rounded-md border border-slate-200 px-3 py-2 text-sm bg-white/90" placeholder="例: 12" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs text-slate-600 mb-1">BPM</label>
                                <input value={form.bpm} onChange={handleChange('bpm')} className="rounded-md border border-slate-200 px-3 py-2 text-sm bg-white/90" placeholder="例: 160" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs text-slate-600 mb-1">基本速度</label>
                                <input value={form.baseSpeed} onChange={handleChange('baseSpeed')} className="rounded-md border border-slate-200 px-3 py-2 text-sm bg-white/90" placeholder="例: 1.0" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs text-slate-600 mb-1">倍率</label>
                                <input value={form.multiplier} onChange={handleChange('multiplier')} className="rounded-md border border-slate-200 px-3 py-2 text-sm bg-white/90" placeholder="例: 1.8" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs text-slate-600 mb-1">目標 HI-SPEED</label>
                                <input value={form.target} onChange={handleChange('target')} className="rounded-md border border-slate-200 px-3 py-2 text-sm bg-white/90" placeholder="任意" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xs text-slate-600 mb-1">メモ</label>
                                <input value={form.note} onChange={handleChange('note')} className="rounded-md border border-slate-200 px-3 py-2 text-sm bg-white/90" placeholder="任意メモ" />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-3">
                            <button onClick={handleRun} className="inline-flex items-center justify-center rounded-md bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm font-medium shadow">
                                実行
                            </button>
                            <button onClick={() => { setForm({ level: '', bpm: '', baseSpeed: '', multiplier: '', target: '', note: '' }); setResult(null) }} className="inline-flex items-center justify-center rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 text-sm">
                                リセット
                            </button>
                            {result && <div className="ml-4 text-sm text-slate-600">{result}</div>}
                        </div>
                    </div>

                    <div className="mt-4 text-xs text-slate-500">
                        表は参考値です。実際の設定はプレイヤーの好みや譜面に合わせて調整してください。
                    </div>
                </section>
            </div>
        </main>
    )
}