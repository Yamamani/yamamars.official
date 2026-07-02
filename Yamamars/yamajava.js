// btn_11 クラスを持つ要素をすべて取得
const actionButtons = document.querySelectorAll('.btn_11');

// 要素が存在する場合のみ処理を実行する（存在チェック）
if (actionButtons.length > 0) {
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // ボタンを押した後の処理を try...catch で保護
            try {
                // 動作確認用
                console.log(button.textContent + " を押しました！");
                
                // 【注意】もしここに将来複雑な処理を追加して、そこでエラーが起きても
                // この try...catch がエラーを回収するため、画面全体がフリーズしません。
                
            } catch (error) {
                // 万が一エラーが起きた場合は、コンソールに原因を優しく表示
                console.error("ボタンクリック処理でエラーが発生しました:", error.message);
            }
        });
    });
} else {
    // ボタンが見つからなかった場合に開発者ツールへ警告を出す（エラーにはしない）
    console.warn("警告: '.btn_11' を持つボタンがページ内に見つかりません。");
}
