var btn = document.getElementById('btn');

btn.addEventListener('click', function(e){
    alert('SUCCESS');
    e.stopPropagation();
})