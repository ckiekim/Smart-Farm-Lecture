module.exports.userList = function() {
    return `
<!DOCTYPE html>
<html lang="ko">

<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>

<body>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src="greenlogo.png" class="d-inline-block align-top" alt="">&nbsp;&nbsp;&nbsp;
            <ul class="nav nav-pills mr-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">로그아웃</a>
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
        <div class="row" style="margin-top: 30px">
            <div class="col-2">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="/sensor">센서</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/actuator">액츄에이터</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            사용자
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/user/register">등록(C)</a>
                            <a class="dropdown-item" href="#">조회(R)</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                    </li>
                </ul>
            </div>
            <div class="col-10">
                <div class="row" style="margin-left: 10px">
                    <div class="col-12"><h3>자기 소개</h3></div>
                    <div class="col-12"><hr></div>
                    <div class="col-3">
                        사진 영역
                    </div>
                    <div class="col-8">
                        <p>자기 소개</p>
                    </div>
                    <div class="col-1">
                        비고 영역
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
}
