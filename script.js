const api_url ="https://favqs.com/api/qotd";
const quoteButton = document.getElementById("search")
const $author = $('#author')
const $quote = $('#quote')

function handleGetData(event) {
    event.preventDefault()
    $.ajax(api_url).then(
        function(data){
        console.log(data);
        $quote.text(data.quote.body)
        $author.text("--" + data.quote.author)
})};

