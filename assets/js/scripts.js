$(document).ready(function () {
    $('#idLiferay').hide();
    $('#idJava').hide();
    $('#idJs').hide();
    $('#idCss').hide();
    $('#idGit').hide();
    $('#idPost').hide();
    $('#idMysql').hide();
    $('#idHtml').hide();

    $('#liferay').mouseout(function () {
        $('#idLiferay').hide();
    });
    $('#liferay').mouseover(function () {
        $('#idLiferay').show();
    });

    $('#java').mouseout(function () {
        $('#idJava').hide();
    });
    $('#java').mouseover(function () {
        $('#idJava').show();
    });

    $('#js').mouseout(function () {
        $('#idJs').hide();
    });
    $('#js').mouseover(function () {
        $('#idJs').show();
    });

    $('#css').mouseout(function () {
        $('#idCss').hide();
    });
    $('#css').mouseover(function () {
        $('#idCss').show();
    });

    $('#git').mouseout(function () {
        $('#idGit').hide();
    });
    $('#git').mouseover(function () {
        $('#idGit').show();
    });
    
    $('#post').mouseout(function () {
        $('#idPost').hide();
    });
    $('#post').mouseover(function () {
        $('#idPost').show();
    });

    $('#mysql').mouseout(function () {
        $('#idMysql').hide();
    });
    $('#mysql').mouseover(function () {
        $('#idMysql').show();
    });

    $('#html').mouseout(function () {
        $('#idHtml').hide();
    });
    $('#html').mouseover(function () {
        $('#idHtml').show();
    });


});