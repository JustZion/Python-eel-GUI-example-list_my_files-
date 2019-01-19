$('.file').click(function() {
    var a = document.querySelector('.dir').value;
    eel.automate(a)
})

eel.expose(find_the_files)
function find_the_files(files) {
    document.querySelector('.data_entry').value += files
}

eel.expose(done)
function done(n) {
    document.querySelector('.process_check').innerHTML = '...Finished in '+n+' seconds';
}

eel.expose(starting)
function starting() {
    document.querySelector('.process_check').innerHTML = '...Loading';
}

$('.back').click(function() {
    eel.back()
    document.querySelector('.data_entry').value = '';
    document.querySelector('.process_check').innerHTML = '...Waiting';
})

eel.expose(show_dir) 
function show_dir(a) {
    document.querySelector('.curr_dir').innerHTML = a;
}