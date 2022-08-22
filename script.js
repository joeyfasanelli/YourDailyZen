const api_url ="https://favqs.com/api/qotd";
const $button = $('#search');
const $author = $('#author')
const $quote = $('#quote')



async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getapi(api_url);


function generateQuote() {
    $.ajax(api_url).then(
        function(data) {
            $quote.text(data.body)
            $author.text(data.author)
        }
    )
}

generateQuote();

$button.on('click', generateQuote);