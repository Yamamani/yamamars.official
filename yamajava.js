// btn_11 クラスを持つ要素をすべて取得
const actionButtons = document.querySelectorAll('.btn_11');

actionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // 再読み込みと、URLに「#」が付くのを防ぐ
        e.preventDefault();
        
        // 動作確認用（必要なければ削除してください）
        console.log(button.textContent + " を押しました！");
    });
});