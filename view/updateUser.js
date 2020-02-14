module.exports.updateUser = function(navBar, depts, user) {
    let options = '';
    for (dept of depts) {
        if (dept.did === user.deptId)
            options += `<option value="${dept.did}" selected>${dept.name}</option>`;
        else
            options += `<option value="${dept.did}">${dept.name}</option>`;
    }
    return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <title>강남 스마트팜</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container">
        ${navBar}
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
                            <a class="dropdown-item" href="#">등록(C)</a>
                            <a class="dropdown-item" href="/user/list">조회(R)</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
                    </li>
                </ul>
            </div>
            <div class="col-10">
                <div class="row" style="margin-left: 10px">
                    <div class="col-12"><h3>사용자 수정</h3></div>
                    <div class="col-12"><hr></div>
                    <div class="col-2"></div>
                    <div class="col-7">
                        <form action="/user/update" method="POST">
                            <input type="hidden" name="uid" value="${user.uid}">
                            <table class="table table-borderless">
                                <tr>
                                    <td>아이디</td>
                                    <td>${user.uid}</td>
                                </tr>
                                <tr>
                                    <td>이름</td>
                                    <td><input type="text" class="form-control" name="name" value="${user.name}"></td>
                                </tr>
                                <tr>
                                    <td>부서명</td>
                                    <td>
                                        <select class="form-control" id="dept" name="dept">
                                            ${options}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>전화번호</td>
                                    <td><input type="text" class="form-control" name="tel" value="${user.tel}"></td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="text-align: center;">
                                        <button type="submit" class="btn btn-primary">수정</button>&nbsp;&nbsp;
                                        <button type="reset"" class="btn btn-secondary">취소</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
}
//<img src="greenlogo.png" class="d-inline-block align-top" alt="">&nbsp;&nbsp;&nbsp;