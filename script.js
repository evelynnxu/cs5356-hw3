document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fetch-quote").addEventListener("click", fetchRandomQuote);
});

function fetchRandomQuote() {
    fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random")
        .then(response => response.json())  // 解析 JSON
        .then(data => {
            console.log("Fetched Quote Data:", data);  // ✅ 在 Console 里检查数据
            const quoteData = data[0];  // API 返回的是数组，取第一个元素

            const quote = quoteData.q;   // 名言
            const author = quoteData.a;  // 作者

            document.getElementById("quote-container").innerHTML = `
                <blockquote>
                    <p>"${quote}"</p>
                    <cite>- ${author}</cite>
                </blockquote>
            `;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            document.getElementById("quote-container").innerHTML = `<p>⚠️ 获取名言失败，请稍后再试。</p>`;
        });
}


