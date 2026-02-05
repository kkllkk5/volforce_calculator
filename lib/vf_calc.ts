function cacl_grade_bonus(score: number) {
    // グレードによってVFに以下の係数がかかる
    // S	990万	1.05
    // AAA+	980万	1.02
    // AAA	970万	1.00
    // AA+	950万	0.97
    // AA	930万	0.94
    // A+	900万	0.91
    // A	870万	0.88
    // B	750万	0.85
    // C	650万	0.82
    // D	-	0.80

    if (score < 6500000) return 0.80
    else if (score < 7500000) return 0.82
    else if (score < 8700000) return 0.85
    else if (score < 9000000) return 0.88
    else if (score < 9300000) return 0.91
    else if (score < 9500000) return 0.94
    else if (score < 9700000) return 0.97
    else if (score < 9800000) return 1.00
    else if (score < 9900000) return 1.02
    else return 1.05
}

export function vf_calc(level: string, clear_mark: string, score: string) {

    // 値チェック
    if (Number.isNaN(Number(level))) {
        alert("レベルに不正な値が入力されています")
        return "0"
    }
    if (Number.isNaN(Number(clear_mark))) {
        alert("クリアマークに不正な値が入力されています")
        return "0"
    }
    if (Number.isNaN(Number(score))) {
        alert("クリアマークに不正な値が入力されています")
        return "0"
    }

    const level_float = parseFloat(level)
    const clear_mark_int = parseInt(clear_mark)
    const score_int = parseInt(score)

    // スコアがマイナス，または1000万点より大きい場合はエラー

    if ((score_int < 0) || (10000000 < score_int)) {
        alert("スコアは0〜1000万点の間で入力してください")
        return "0"
    }

    // 以下のようにクリアメダル係数がかかる
    // PERFECT ULTIMATE CHAIN	1.10
    // ULTIMATE CHAIN	1.06
    // MAXXIVE COMP.	1.04
    // EXCESSIVE COMP.	1.02
    // EFFECTIVE COMP.	1.00
    // TRACK CRASH	0.50
    const clear_mark_bonus_map = new Map<number, number>([
        [0, 0.50],
        [1, 1.00],
        [2, 1.02],
        [3, 1.04],
        [4, 1.06],
        [5, 1.10]
    ])

    const clear_mark_bonus = clear_mark_bonus_map.get(clear_mark_int) ?? 0

    // クリアメダル係数が取得できなかった場合はエラーを返す
    if (clear_mark_bonus == 0) {
        alert("クリアメダル係数の取得時にエラーが発生しました")
        return "0"
    }



    // グレードによってVFに以下の係数がかかる
    // S	990万	1.05
    // AAA+	980万	1.02
    // AAA	970万	1.00
    // AA+	950万	0.97
    // AA	930万	0.94
    // A+	900万	0.91
    // A	870万	0.88
    // B	750万	0.85
    // C	650万	0.82
    // D	-	0.80

    const grade_bonus = cacl_grade_bonus(score_int)

    // 単曲VF
    const vf_single = Math.floor(level_float * 20 * clear_mark_bonus * grade_bonus * (score_int / 10000000.0))
    // 最終的には，実際の計算式で用いられる1/1000倍を施した状態で表示（要調整）
    return String(vf_single / 1000)

}