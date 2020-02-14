module.exports = {
    navBar: function() {
        return `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img src="/greenlogo.png" class="d-inline-block align-top" alt="">&nbsp;&nbsp;&nbsp;
                <ul class="nav nav-pills mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/user/logout">로그아웃</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"> </a>
                    </li>
                </ul>
                <div class="navbar-text">
                    <p>날씨</p>
                    <p>관리자님 환영합니다.</p>
                </div>
            </nav>
        `;
    }
}