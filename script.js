// 监听按钮点击事件
document.getElementById("fetch-user").addEventListener("click", fetchRandomUser);

// 从 API 获取随机用户数据
function fetchRandomUser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())  // 解析 JSON
        .then(data => {
            const user = data.results[0];  // 获取 API 返回的第一个用户

            // 解析用户信息
            const name = `${user.name.first} ${user.name.last}`;
            const picture = user.picture.large;
            const email = user.email;
            const location = `${user.location.city}, ${user.location.country}`;

            // 更新 HTML 页面
            document.getElementById("user-container").innerHTML = `
                <div class="user-card">
                    <img src="${picture}" alt="User Picture">
                    <h2>${name}</h2>
                    <p>Email: ${email}</p>
                    <p>Location: ${location}</p>
                </div>
            `;
        })
        .catch(error => console.error("Error fetching user:", error));
}
