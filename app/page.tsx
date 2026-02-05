'use client'

import { useState } from 'react'
import { vf_calc } from '@/lib/vf_calc'

export default function ToolDetailTable() {
  const [level, setLevel] = useState('1') // レベル
  const [mark, setMark] = useState('0') // クリアマーク
  const [score, setScore] = useState('0') //スコア

  const [vf, setVf] = useState('') // 単曲VF

  // レベル一覧
  const levels = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
    { label: "13", value: "13" },
    { label: "14", value: "14" },
    { label: "15", value: "15" },
    { label: "16", value: "16" },
    { label: "17.0", value: "17" },
    { label: "17.5", value: "17.5" },
    { label: "18.0", value: "18" },
    { label: "18.1", value: "18.1" },
    { label: "18.2", value: "18.2" },
    { label: "18.3", value: "18.3" },
    { label: "18.4", value: "18.4" },
    { label: "18.5", value: "18.5" },
    { label: "18.6", value: "18.6" },
    { label: "18.7", value: "18.7" },
    { label: "18.8", value: "18.8" },
    { label: "18.9", value: "18.9" },
    { label: "19.0", value: "19" },
    { label: "19.1", value: "19.1" },
    { label: "19.2", value: "19.2" },
    { label: "19.3", value: "19.3" },
    { label: "19.4", value: "19.4" },
    { label: "19.5", value: "19.5" },
    { label: "19.6", value: "19.6" },
    { label: "19.7", value: "19.7" },
    { label: "19.8", value: "19.8" },
    { label: "19.9", value: "19.9" },
    { label: "20.0", value: "20" },
    { label: "20.1", value: "20.1" },
    { label: "20.2", value: "20.2" },
    { label: "20.3", value: "20.3" },
    { label: "20.4", value: "20.4" },
    { label: "20.5", value: "20.5" },
    { label: "20.6", value: "20.6" },
    { label: "20.7", value: "20.7" },
    { label: "20.8", value: "20.8" },
    { label: "20.9", value: "20.9" },
  ]

  // クリアマーク一覧
  const clear_marks = [
    { label: "TRACK CRASH", value: "0" },
    { label: "COMP", value: "1" },
    { label: "EX COMP(ハード)", value: "2" },
    { label: "MAX COMP(エクハ)", value: "3" },
    { label: "UC", value: "4" },
    { label: "PUC", value: "5" },
  ]

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tool Info</h1>

      <div className="overflow-hidden rounded-xl border shadow">
        <table className="w-full border-collapse">
          <tbody className="divide-y">

            <tr>
              <th className="w-1/3 bg-gray-100 px-4 py-3 text-left text-sm font-semibold">
                レベル
              </th>
              <td className="className= border border-gray-300 rounded-lg px-3 py-2">

                <select className="border" value={level} onChange={(e) => setLevel(e.target.value)}>
                  {levels.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th className="bg-gray-100 px-4 py-3 text-left text-sm font-semibold">
                クリアマーク
              </th>
              <td className="px-4 py-3 text-gray-600">
                {clear_marks.map((clear_mark) => (
                  <label key={clear_mark.value} className="flex" >
                    <input type="radio" name="clear_mark" checked={mark === clear_mark.value} value={clear_mark.value} onChange={(e) => setMark(e.target.value)} />{clear_mark.label}
                  </label>
                ))}
              </td>
            </tr>

            <tr>
              <th className="bg-gray-100 px-4 py-3 text-left text-sm font-semibold">
                スコア
              </th>
              <td className="px-4 py-3 text-gray-600">
                <input type="text" className="border" name="score" value={score} onChange={(e) => setScore(e.target.value)} />
              </td>
            </tr>


          </tbody>
        </table>
      </div>

      <div>
        <button
          onClick={(_) => setVf(vf_calc(level, mark, score))}
          className="inline-block px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          実行
        </button>

      </div>

      <div className="overflow-hidden rounded-xl border shadow">
        <table className="w-full border-collapse">
          <tbody className="divide-y">
            <tr>
              <th className="w-1/3 bg-gray-100 px-4 py-3 text-left text-sm font-semibold">
                単曲VF
              </th>
              <td className="className= border border-gray-300 rounded-lg px-3 py-2">

                {vf}
              </td>
            </tr>
            <tr>
              <th className="w-1/3 bg-gray-100 px-4 py-3 text-left text-sm font-semibold">
                単曲VF*50
              </th>
              <td className="border border-gray-300 rounded-lg px-3 py-2">

                {(parseFloat(vf) * 50).toFixed(3)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )
}
