// 监听按钮点击事件
document.getElementById("fetch-quote").addEventListener("click", fetchRandomQuote);

// 从 API 获取随机名言
function fetchRandomQuote() {
    fetch("https://zenquotes.io/api/random")
        .then(response => response.json())  // 解析 JSON
        .then(data => {
            // 提取名言和作者
            const quote = data.content;
            const author = data.author;

            // 更新 HTML 页面
            document.getElementById("quote-container").innerHTML = `
                <blockquote>
                    <p>"${quote}"</p>
                    <cite>- ${author}</cite>
                </blockquote>
            `;
        })
        .catch(error => console.error("Error fetching quote:", error));
}
