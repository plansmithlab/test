document.addEventListener('DOMContentLoaded', function() {
    console.log('페이지가 로드되었습니다.');

    const heading = document.querySelector('h1');
    heading.addEventListener('click', function() {
        alert('제목을 클릭하셨습니다!');
    });
});
