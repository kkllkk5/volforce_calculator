'use client'
import { useState } from 'react'

export default function Hispeed_Calculator_Page() {
    const [form, setForm] = useState({
        bpmMin: '',
        bpmMax: '',
        usualSpeed: '',
        multiplier: '',
        note: ''
    })
    const [align, setAlign] = useState<'min' | 'max'>('min')
    const [result, setResult] = useState<string | null>(null)

    const handleChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [key]: e.target.value }))
    }

    const handleRun = () => {
        const base = parseFloat(form.usualSpeed || '0')
        const bpmMin = parseFloat(form.bpmMin || '0')
        const bpmMax = parseFloat(form.bpmMax || '0')

        if (!isFinite(base) || !isFinite(bpmMin) || !isFinite(bpmMax) || bpmMin === 0 || bpmMax === 0) {
            setResult('数値を正しく入力してください（BPM最小・最大は0以外）')
            return
        }

        // align が 'min' のときは従来通り (bpmMax / bpmMin)
        // align が 'max' のときは最大と最小を反対にして計算 (bpmMin / bpmMax)
        const ratio = align === 'min' ? (bpmMax / bpmMin) : (bpmMin / bpmMax)
        const calc = (base * ratio).toFixed(2)
        const bpmRange = `${form.bpmMin || '−'} ～ ${form.bpmMax || '−'}`
        const aligned = align === 'min' ? `${form.bpmMin || '−'} (最小)` : `${form.bpmMax || '−'} (最大)`

        setResult(`計算結果: ${calc} （普段のハイスピ ${base} × 比率 ${ratio.toFixed(2)}） — BPM: ${bpmRange} — 合わせるBPM: ${aligned}`)
        console.log('実行:', { ...form, align, ratio, calc })
    }

    const handleReset = () => {
        setForm({ bpmMin: '', bpmMax: '', usualSpeed: '', multiplier: '', note: '' })
        setAlign('min')
        setResult(null)
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-6 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <header className="mb-6">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">HI-SPEED 計算機</h1>
                    <p className="text-sm text-slate-500">ソフランにおけるHI-SPEED設定の目安表</p>
                </header>

                <section className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow p-6">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-slate-900">カスタム入力</h2>
                        <p className="text-sm text-slate-500">例:ENDYMION（メインBPM220）の高速（BPM440）を普段のハイスピにしたい場合</p>
                        <p className="text-sm text-slate-500">BPM(最小)→220</p>
                        <p className="text-sm text-slate-500">BPM(最大)→440</p>
                        <p className="text-sm text-slate-500">ラジオボタン→最大</p>
                    </div>

                    {/* 横2列 × 縦3行 の入力グリッド（目標削除、基本速度→普段のハイスピードへ変更） */}
                    <div className="mt-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="text-xs text-slate-600 mb-1">BPM（最小）</label>
                                <input value={form.bpmMin} onChange={handleChange('bpmMin')} className="rounded-md border border-slate-200 px-3 py-2 text-sm bg-white/90" placeholder="例: 120" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs text-slate-600 mb-1">BPM（最大）</label>
                                <input value={form.bpmMax} onChange={handleChange('bpmMax')} className="rounded-md border border-slate-200 px-3 py-2 text-sm bg-white/90" placeholder="例: 180" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xs text-slate-600 mb-1">普段のハイスピード</label>
                                <input value={form.usualSpeed} onChange={handleChange('usualSpeed')} className="rounded-md border border-slate-200 px-3 py-2 text-sm bg-white/90" placeholder="例: 1.0" />
                            </div>

                            <div /> {/* 空セル（レイアウト調整用） */}
                        </div>

                        {/* ラジオボタン：どちらのBPMを普段のハイスピに合わせますか */}
                        <div className="mt-4">
                            <p className="text-sm text-slate-700 mb-2">どちらのBPMを普段のハイスピに合わせますか</p>
                            <div className="flex items-center gap-4">
                                <label className="inline-flex items-center gap-2 text-sm">
                                    <input type="radio" name="alignBpm" checked={align === 'min'} onChange={() => setAlign('min')} className="h-4 w-4 text-sky-600" />
                                    <span className="text-slate-600">最小</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-sm">
                                    <input type="radio" name="alignBpm" checked={align === 'max'} onChange={() => setAlign('max')} className="h-4 w-4 text-sky-600" />
                                    <span className="text-slate-600">最大</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-3">
                            <button onClick={handleRun} className="inline-flex items-center justify-center rounded-md bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm font-medium shadow">
                                実行
                            </button>
                            <button onClick={handleReset} className="inline-flex items-center justify-center rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 text-sm">
                                リセット
                            </button>
                            {result && <div className="ml-4 text-sm text-slate-600">{result}</div>}
                        </div>
                    </div>

                    <div className="mt-4 text-xs text-slate-500">
                        入力が空の場合は目安として扱われます。計算ロジックを変更したい場合は指示してください。
                    </div>
                </section>
            </div>
        </main>
    )
}