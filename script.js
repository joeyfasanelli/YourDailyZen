const api_url ="https://zenquotes.io/api/today";
const $author = $('#a')
const $quote = $('#q')


function handleGetData(event) {
    event.preventDefault()
    $.ajax(api_url).then(
        function(data){
        console.log(data);
        $quote.text('"' + data[0].q + '"');
        $author.text("--" + data[0].a)
        
})};


